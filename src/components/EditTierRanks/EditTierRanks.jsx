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
                                &#8679;
                        </button>
                        <button className="downBtn"
                            onClick={movePlayerTierRankDown}>
                                &#8681;
                        </button>
                    </center>
                </td>
            ))}
        </>
    )
}