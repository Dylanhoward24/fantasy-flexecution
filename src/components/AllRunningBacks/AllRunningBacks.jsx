import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AllRunningBacks() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_RUNNINGBACKS' });
    }, []);

    // global state
    const hosts = useSelector((store) => store.hosts);
    const runningBacks = useSelector((store) => store.runningBacks);

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
                {runningBacks.map((runningBack, i) => (
                    <tr key={i}>
                        <td>{runningBack.firstName} {runningBack.lastName}</td>
                        <td>{runningBack.team}</td>
                        {runningBack.tierName.map((tierName, i) => (
                            <td key={i}>{tierName}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}