import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AllQuarterbacks() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_QUARTERBACKS' });
    }, []);

    // global state
    const hosts = useSelector((store) => store.hosts);
    const quarterbacks = useSelector((store) => store.quarterbacks);

    return (
        <table>
            <thead>
                <tr>
                    <th className="rankingsTableHeader">Player Name</th>
                    <th className="rankingsTableHeader">Team</th>
                    {hosts.map((host, i) => (
                        <th key={i}>Tier <br /> ({host.first_name})</th>
                    ))}
                    <th className="rankingsTableHeader">Tags</th>
                </tr>
            </thead>
            <tbody>
                {quarterbacks.map((quarterback, i) => (
                    <tr key={i}>
                        <td>{quarterback.firstName} {quarterback.lastName}</td>
                        <td>{quarterback.team}</td>
                        {quarterback.tierName.map((tierName, i) => (
                            <td key={i}>{tierName}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}