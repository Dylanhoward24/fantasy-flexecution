import axios from "axios";

export default function PlayersItem( {player} ) {

    function editPlayer() {
        return (
            axios.delete('/')
        );
    }

    function deletePlayer() {
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