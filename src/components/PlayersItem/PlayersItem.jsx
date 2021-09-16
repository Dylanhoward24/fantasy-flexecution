import axios from "axios";
import { useDispatch } from "react-redux";

export default function PlayersItem( {player} ) {
    const dispatch = useDispatch();

    // get id of player passed through local props
    let id = player.playerId;

    function deletePlayer() {
        axios.delete(`api/players/${id}`)
            .then(() => {
                dispatch({
                    type: 'FETCH_PLAYERS'
                });
            });
    }

    function editPlayer() {
        return (
            null
        );
    }

    return (
        <>
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
            <td><button onClick={editPlayer}>Edit</button></td>
            <td><button onClick={deletePlayer}>Delete</button></td>
            <td>{player.addedBy}</td>
        </>
    );
}