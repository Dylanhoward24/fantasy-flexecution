export default function EditTierRanks( {player} ) {

    function movePlayerTierRankUp() {

    }

    function movePlayerTierRankDown() {
        
    }

    return (
        <>
            {player.tierRank.map((tierRank, i) => (
                <td key={i}>
                    <center>
                        {tierRank}
                        <br />
                        <br />
                        <button className="upBtn"
                            onClick={movePlayerTierRankUp}>
                                Up
                        </button>
                        <button className="upBtn"
                            onClick={movePlayerTierRankDown}>
                                Down
                        </button>
                    </center>
                </td>
            ))}
        </>
    )
}