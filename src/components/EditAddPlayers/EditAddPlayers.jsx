import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function EditAddPlayers() {
    const dispatch = useDispatch();

    // local state
    let [newPlayer, setNewPlayer] = useState({
        firstName: '', lastName: '', team: 0, position: 0, createdByUserId
    });
    // global state
    const positions = useSelector((store) => store.positions);
    const teams = useSelector((store) => store.teams);
    const tags = useSelector((store) => store.tags);
    const user = useSelector((store) => store.user);
    const tiers = useSelector((store) => store.tiers);

    // make const to be referenced in each new player added
    const createdByUserId = user.id

    function addNewPlayer(e) {
        e.preventDefault();

        // post the local state to the db
        axios.post('/api/players', {newPlayer})
            .then(() => {
                dispatch({
                    type: 'FETCH_PLAYERS'
                });
            });
            
    }

    return (
        <div className="container">
            <center>
                <h2>Add Player</h2>
                <form onSubmit={addNewPlayer}>
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
                    <button>Add</button>
                </form>
            </center>

        </div>
    );
}