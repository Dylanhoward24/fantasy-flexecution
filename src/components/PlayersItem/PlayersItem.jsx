import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function PlayersItem( {player} ) {
    const dispatch = useDispatch();

    // get id of player passed through local props
    let id = player.playerId;

    // local state, to determine the edit screen showing (toggle)
    let [toggleCount, setToggleCount] = useState(1);

    // global state
    const teams = useSelector((store) => store.teams);
    const positions = useSelector((store) => store.positions);

    let [editedPlayer, setEditedPlayer] = useState({
        firstName: '', lastName: '', team: 0, position: 0
    });

    function deletePlayer() {
        axios.delete(`api/players/${id}`)
            .then(() => {
                dispatch({
                    type: 'FETCH_PLAYERS'
                });
            });
    }

    function toggleEdit() {
        setToggleCount(toggleCount + 1);
    }

    return (
        <>
            {toggleCount % 2 === 1 ?
            <tr>
                <td>{player.firstName} {player.lastName}</td>
                <td>{player.team}</td>
                <td>{player.position}</td>
                {player.tier.map((tier, i) => (
                    <td key={i}>{tier}</td>
                ))}
                {player.tierRank.map((tierRank, i) => (
                    <td key={i}>{tierRank}</td>
                ))}
                <td>{player.tags}</td>
                <td><button onClick={toggleEdit}>Edit</button></td>
                <td><button onClick={deletePlayer}>Delete</button></td>
                <td>{player.addedBy}</td>
            </tr>
            :
            <>
            <tr>
                <td>{player.firstName} {player.lastName}</td>
                <td>{player.team}</td>
                <td>{player.position}</td>
                {player.tier.map((tier, i) => (
                    <td key={i}>{tier}</td>
                ))}
                {player.tierRank.map((tierRank, i) => (
                    <td key={i}>{tierRank}</td>
                ))}
                <td>{player.tags}</td>
                <td><button onClick={toggleEdit}>Edit</button></td>
                <td><button onClick={deletePlayer}>Delete</button></td>
                <td>{player.addedBy}</td>
            </tr>
            <tr>
                <td>
                    <input type="text" value={editedPlayer.firstName} placeholder="First Name"
                        onChange={(e) => setEditedPlayer({...editedPlayer, firstName: e.target.value})}/>
                </td>
                <td>
                    <select value={editedPlayer.team}
                        onChange={(event) => setEditedPlayer({...editedPlayer, team: event.target.value})}>
                        <option disabled value='0'>Team</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.team_name}
                            </option>
                        ))}
                    </select>
               </td>
                <td>
                    <select value={editedPlayer.position}
                        onChange={(event) => setEditedPlayer({...editedPlayer, position: event.target.value})}>
                        <option disabled value='0'>Position</option>
                        {positions.map((position) => (
                            <option key={position.id} value={position.id}>
                                {position.position}
                            </option>
                        ))}
                    </select>
                </td>
                {player.tier.map((tier, i) => (
                    <td key={i}>{tier}</td>
                ))}
                {player.tierRank.map((tierRank, i) => (
                    <td key={i}>{tierRank}</td>
                ))}
                <td>{player.tags}</td>
                <td><button onClick={toggleEdit}>Edit</button></td>
                <td><button onClick={deletePlayer}>Delete</button></td>
            </tr>
            <tr>
                <td><input type="text" value={editedPlayer.lastName} placeholder="Last Name"
                   onChange={(e) => setEditedPlayer({...editedPlayer, lastName: e.target.value})}/></td>
            </tr>
            </>
            }
        </>
    );
}