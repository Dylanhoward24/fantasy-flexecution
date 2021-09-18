import './EditTiers.css';

export default function EditTiers( {player} ) {

    function movePlayerTierUp() {

    }

    function movePlayerTierDown() {

    }

    return (
        <>
            {player.tier.map((tier, i) => {
                switch (tier) {
                    case 1:
                        return (
                            <td key={i}>
                                <center>
                                    Elite Superstars
                                    <br />
                                    <br />
                                    <button className="upBtn"
                                        onClick={movePlayerTierUp}>
                                            &#8592;
                                    </button>
                                    <button className="upBtn"
                                        onClick={movePlayerTierDown}>
                                            &#8592;
                                    </button>
                                </center>
                            </td>
                        );
                    case 2:
                        return (
                            <td key={i}>
                                <center>
                                    Elite Upside
                                    <br />
                                    <br />
                                    <button className="upBtn"
                                        onClick={movePlayerTierUp}>
                                            Up
                                    </button>
                                    <button className="upBtn"
                                        onClick={movePlayerTierDown}>
                                            Down
                                    </button>
                                </center>
                            </td>
                        );
                    case 3:
                        return (
                            <td key={i}>
                                <center>
                                    Weekly Starter
                                    <br />
                                    <br />
                                    <button className="upBtn"
                                        onClick={movePlayerTierUp}>
                                            Up
                                    </button>
                                    <button className="upBtn"
                                        onClick={movePlayerTierDown}>
                                            Down
                                    </button>
                                </center>
                            </td>
                        );
                    case 4:
                        return (
                            <td key={i}>
                                <center>
                                    High Upside, Low Floor
                                    <br />
                                    <br />
                                    <button className="upBtn"
                                        onClick={movePlayerTierUp}>
                                            Up
                                    </button>
                                    <button className="upBtn"
                                        onClick={movePlayerTierDown}>
                                            Down
                                    </button>
                                </center>
                            </td>
                        );
                    case 5:
                        return (
                            <td key={i}>
                                <center>
                                    Low Upside, High Floor
                                    <br />
                                    <br />
                                    <button className="upBtn"
                                        onClick={movePlayerTierUp}>
                                            Up
                                    </button>
                                    <button className="upBtn"
                                        onClick={movePlayerTierDown}>
                                            Down
                                    </button>
                                </center>
                            </td>
                        );
                    case 6:
                        return (
                            <td key={i}>
                                <center>
                                    Too Soon To Tell
                                    <br />
                                    <br />
                                    <button className="upBtn"
                                        onClick={movePlayerTierUp}>
                                            Up
                                    </button>
                                    <button className="upBtn"
                                        onClick={movePlayerTierDown}>
                                            Down
                                    </button>
                                </center>
                            </td>
                        );
                    case 7:
                        return (
                            <td key={i}>
                                <center>
                                    Holds
                                    <br />
                                    <br />
                                    <button className="upBtn"
                                        onClick={movePlayerTierUp}>
                                            Up
                                    </button>
                                    <button className="upBtn"
                                        onClick={movePlayerTierDown}>
                                            Down
                                    </button>
                                </center>
                            </td>
                        );
                    default:
                        return null
                }
            })}
        </>
    );
}