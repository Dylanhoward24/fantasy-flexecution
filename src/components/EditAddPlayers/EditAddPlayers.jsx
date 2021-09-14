import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import EditAddPlayersItem from "../EditAddPlayersItem/EditAddPlayersItem";
 
export default function EditAddPlayers() {
    const dispatch = useDispatch();

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

    // take the last however many hosts there are that have been confirmed as correct to pass for our db post
    const rankingsToPass = playerRankings.slice((playerRankings.length)-(hosts.length), playerRankings.length);

    function addNewPlayer() {
        // post the local state to the db
        // console.log(newPlayer, rankingsToPass, playersTag);
        axios.post('/api/players', {
            newPlayer, rankingsToPass, playersTag
        }).then(() => {
                dispatch({
                    type: 'FETCH_PLAYERS'
                });
            });
    }

    return (
        <div className="container">
            <center>
                <h2>Add Player</h2>
                <input type="text" value={newPlayer.firstName} placeholder="First Name"
                    onChange={(e) => setNewPlayer({...newPlayer, firstName: e.target.value})}/>
                <input type="text" value={newPlayer.lastName} placeholder="Last Name"
                    onChange={(e) => setNewPlayer({...newPlayer, lastName: e.target.value})}/>
                <select value={newPlayer.team}
                    onChange={(event) => setNewPlayer({...newPlayer, team: event.target.value})}>
                    <option disabled value='0'>Team</option>
                    {teams.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>
                <select value={newPlayer.position}
                    onChange={(event) => setNewPlayer({...newPlayer, position: event.target.value})}>
                    <option disabled value='0'>Position</option>
                    {positions.map((position) => (
                        <option key={position.id} value={position.id}>
                            {position.position}
                        </option>
                    ))}
                </select>
                <select value={playersTag}
                    onChange={(event) => setPlayersTag(event.target.value)}>
                    <option disabled value='0'>Tag</option>
                    {tags.map((tag) => (
                        <option key={tag.id} value={tag.id}>
                            {tag.tag}
                        </option>
                    ))}
                </select>
                <button onClick={addNewPlayer}>Add</button>
                {hosts.map((host, i) => (
                    <div key={i}>
                        <EditAddPlayersItem host={host}/>
                    </div>
                ))}
            </center>
        </div>
    );
}