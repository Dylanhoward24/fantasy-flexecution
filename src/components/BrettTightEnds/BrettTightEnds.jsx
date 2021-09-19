import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function BrettTightEnds() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_BRETT_TIGHTENDS' });
    }, []);

    // global state
    const tiers = useSelector((store) => store.tiers);
    const tightEnds = useSelector((store) => store.tightEnds);

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
                    {tightEnds.map((tightEnd, i) => {
                        if (tightEnd.tierOrder === tier.order_on_list) {
                            return (
                                <tr>
                                    <td>{tightEnd.firstName} {tightEnd.lastName}</td>
                                    <td>{tightEnd.team}</td>
                                    <td>{tightEnd.rank}</td>
                                    <td>{tightEnd.tags}</td>
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