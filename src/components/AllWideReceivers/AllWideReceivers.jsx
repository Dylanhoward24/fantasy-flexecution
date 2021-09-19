import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AllWideReceivers() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_WIDERECEIVERS' });
    }, []);

    // global state
    const hosts = useSelector((store) => store.hosts);
    const wideReceivers = useSelector((store) => store.wideReceivers);

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
                {wideReceivers.map((receiver, i) => (
                    <tr key={i}>
                        <td>{receiver.firstName} {receiver.lastName}</td>
                        <td>{receiver.team}</td>
                        {receiver.tierName.map((tierName, i) => (
                            <td key={i}>{tierName}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}