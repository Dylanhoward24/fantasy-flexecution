import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function BrettRunningBacks() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_BRETT_RUNNINGBACKS' });
    }, []);

    // global state
    const tiers = useSelector((store) => store.tiers);
    const runningBacks = useSelector((store) => store.runningBacks);

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
                    {runningBacks.map((runningBack, i) => {
                        if (runningBack.tierOrder === tier.order_on_list) {
                            return (
                                <tr>
                                    <td>{runningBack.firstName} {runningBack.lastName}</td>
                                    <td>{runningBack.team}</td>
                                    <td>{runningBack.rank}</td>
                                    <td>{runningBack.tags}</td>
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