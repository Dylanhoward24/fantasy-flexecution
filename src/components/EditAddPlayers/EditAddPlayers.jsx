import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import HostsItem from '../HostsItem/HostsItem';
import PlayersItem from "../PlayersItem/PlayersItem";

export default function EditAddPlayers() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYERS'});
    }, []);
 
    // make const to be referenced in each new player added
    const user = useSelector((store) => store.user);
    const createdByUserId = user.id;

    // local state
    let [playersTag, setPlayersTag] = useState(0);
    let [newPlayer, setNewPlayer] = useState({
        firstName: '', lastName: '', team: 0, position: 0, createdByUserId
    });

    // global state
    const positions = useSelector((store) => store.positions);
    const teams = useSelector((store) => store.teams);
    const tags = useSelector((store) => store.tags);
    const hosts = useSelector((store) => store.hosts);
    const playerRankings = useSelector((store) => store.playerRankings);
    const players = useSelector((store) => store.players);

    function addNewPlayer() {
        // post the local state to the db
        axios.post('/api/players', {
            newPlayer, playerRankings, playersTag
        }).then(() => {
                dispatch({
                    type: 'FETCH_PLAYERS'
                });
            });
        setPlayersTag(0);
        setNewPlayer({
            firstName: '', lastName: '', team: 0, position: 0, createdByUserId
        });
        // clear the global state so we don't get more than the # of hosts for next input
        // since ADD_NEW_PLAYER_RANKKINGS uses a spread operator for state
        dispatch({
            type: 'CLEAR_PLAYER_RANKINGS'
        });
    }

    return (
        <div className="container">
            <center>
                <h1>Edit / Add Players</h1>
                <form>
                    <input type="text" value={newPlayer.firstName} placeholder="First Name"
                        onChange={(e) => setNewPlayer({...newPlayer, firstName: e.target.value})}/>
                    <input type="text" value={newPlayer.lastName} placeholder="Last Name"
                        onChange={(e) => setNewPlayer({...newPlayer, lastName: e.target.value})}/>
                    <select value={newPlayer.team}
                        onChange={(e) => setNewPlayer({...newPlayer, team: e.target.value})}>
                        <option disabled value='0'>Team</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.team_name}
                            </option>
                        ))}
                    </select>
                    <select value={newPlayer.position}
                        onChange={(e) => setNewPlayer({...newPlayer, position: e.target.value})}>
                        <option disabled value='0'>Position</option>
                        {positions.map((position) => (
                            <option key={position.id} value={position.id}>
                                {position.position}
                            </option>
                        ))}
                    </select>
                    <select value={playersTag}
                        onChange={(e) => setPlayersTag(e.target.value)}>
                        <option disabled value='0'>Tag</option>
                        {tags.map((tag) => (
                            <option key={tag.id} value={tag.id}>
                                {tag.tag}
                            </option>
                        ))}
                    </select>
                    <button onClick={addNewPlayer} className="btn">Add</button>
                    {hosts.map((host, i) => (
                        <div key={i}>
                            <HostsItem host={host}/>
                        </div>
                    ))}
                </form>
                <br />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Team</th>
                            <th>Position</th>
                            {hosts.map((host, i) => (
                                <th key={i}>Tier <br/> ({host.first_name})</th>
                            ))}
                            {hosts.map((host, i) => (
                                <th key={i}>Tier Rank <br/> ({host.first_name})</th>
                            ))}
                            <th>Tags</th>
                            <th>Edit</th>
                            <th>Remove</th>
                            <th>Added <br/> by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, i) => (
                            <tr key={i}>
                                <PlayersItem player={player}/>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}