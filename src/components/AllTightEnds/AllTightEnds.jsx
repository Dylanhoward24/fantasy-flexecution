import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AllTightEnds() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_TIGHTENDS' });
    }, []);

    // global state
    const hosts = useSelector((store) => store.hosts);
    const tightEnds = useSelector((store) => store.tightEnds);

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
                {tightEnds.map((tightEnd, i) => (
                    <tr key={i}>
                        <td>{tightEnd.firstName} {tightEnd.lastName}</td>
                        <td>{tightEnd.team}</td>
                        {tightEnd.tierName.map((tierName, i) => (
                            <td key={i}>{tierName}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}