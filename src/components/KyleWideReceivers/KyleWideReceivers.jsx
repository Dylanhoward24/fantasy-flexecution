import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function KyleWideReceivers() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_KYLE_WIDERECEIVERS' });
    }, []);

    // global state
    const tiers = useSelector((store) => store.tiers);
    const wideReceivers = useSelector((store) => store.wideReceivers);

    return (
        <table>
            <thead>
            <tr>
                <th className="rankingsTableHeader">Player Name</th>
                <th className="rankingsTableHeader">Team</th>
                <th className="rankingsTableHeader">Rank</th>
                <th className="rankingsTableHeader">Tags</th>
            </tr>
            </thead>
            <tbody>
            {tiers.map((tier, i) => (
                <>
                    <tr>
                        <td className="tierNameTableRow">{tier.tier_name}</td>
                        <td className="tierNameTableRow"></td>
                        <td className="tierNameTableRow"></td>
                        <td className="tierNameTableRow"></td>
                    </tr>
                    {wideReceivers.map((receiver, i) => {
                        if (receiver.tierOrder === tier.order_on_list) {
                            return (
                                <tr>
                                    <td>{receiver.firstName} {receiver.lastName}</td>
                                    <td>{receiver.team}</td>
                                    <td>{receiver.rank}</td>
                                    <td>{receiver.tags}</td>
                                </tr>
                            )
                        }
                    })}
                </>
            ))}
            </tbody>
        </table>
    );
}