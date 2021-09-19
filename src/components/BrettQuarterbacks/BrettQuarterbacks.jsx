import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function BrettQuarterbacks() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_BRETT_QUARTERBACKS' });
    }, []);

    // global state
    const tiers = useSelector((store) => store.tiers);
    const quarterbacks = useSelector((store) => store.quarterbacks);

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
                    {quarterbacks.map((quarterback, i) => {
                        if (quarterback.tierOrder === tier.order_on_list) {
                            return (
                                <tr>
                                    <td>{quarterback.firstName} {quarterback.lastName}</td>
                                    <td>{quarterback.team}</td>
                                    <td>{quarterback.rank}</td>
                                    <td>{quarterback.tags}</td>
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