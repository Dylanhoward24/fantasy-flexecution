import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import './RunningBackRankings.css';

export default function QuarterbackRankings() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_QUARTERBACKS'});
        // these will be for stretch goals
        // dispatch({ type: 'FETCH_BRETT_RUNNINGBACKS'});
        // dispatch({ type: 'FETCH_KYLE_RUNNINGBACKS'});
    }, []);

    // global state
    const quarterbacks = useSelector((store) => store.quarterbacks);
    const hosts = useSelector((store) => store.hosts);
    const brettRunningbacks = useSelector((store) => store.brettRunningbacks);
    const kyleRunningbacks = useSelector((store) => store.kyleRunningbacks);

    return (
        <div className="container">
            <h1>Running Back Rankings</h1>
            <RankingsHeader />
            <center>
                <table>
                    <thead>
                    <tr>
                        <th className="playerNameTableDisplay">Player Name</th>
                        <th className="teamTableDisplay">Team</th>
                        
                        <th className="tagsTableDisplay">Tags</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="tierLabel">Elite Superstars</td>
                    </tr>
                    {brettRunningbacks.map((runningback, i) => {
                        if (runningback.tier === 1) {
                            return (
                                <tr key={i}>
                                    <td>{runningback.firstName} {runningback.lastName}</td>
                                    <td>{runningback.team}</td>
                                    <td>{runningback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">Elite Upside</td>
                    </tr>
                    {brettRunningbacks.map((runningback, i) => {
                        if (runningback.tier === 2) {
                            return (
                                <tr key={i}>
                                    <td>{runningback.firstName} {runningback.lastName}</td>
                                    <td>{runningback.team}</td>
                                    <td>{runningback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">Weekly Starter</td>
                    </tr>
                    {brettRunningbacks.map((runningback, i) => {
                        if (runningback.tier === 3) {
                            return (
                                <tr key={i}>
                                    <td>{runningback.firstName} {runningback.lastName}</td>
                                    <td>{runningback.team}</td>
                                    <td>{runningback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">High Floor, Low Upside</td>
                    </tr>
                    {brettRunningbacks.map((runningback, i) => {
                        if (runningback.tier === 4) {
                            return (
                                <tr key={i}>
                                    <td>{runningback.firstName} {runningback.lastName}</td>
                                    <td>{runningback.team}</td>
                                    <td>{runningback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">High Upside, Low Floor</td>
                    </tr>
                    {brettRunningbacks.map((runningback, i) => {
                        if (runningback.tier === 5) {
                            return (
                                <tr key={i}>
                                    <td>{runningback.firstName} {runningback.lastName}</td>
                                    <td>{runningback.team}</td>
                                    <td>{runningback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">To Soon To Tell</td>
                    </tr>
                    {brettRunningbacks.map((runningback, i) => {
                        if (runningback.tier === 6) {
                            return (
                                <tr key={i}>
                                    <td>{runningback.firstName} {runningback.lastName}</td>
                                    <td>{runningback.team}</td>
                                    <td>{runningback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">Holds</td>
                    </tr>
                    {brettRunningbacks.map((quarterback, i) => {
                        if (quarterback.tier === 7) {
                            return (
                                <tr key={i}>
                                    <td>{quarterback.firstName} {quarterback.lastName}</td>
                                    <td>{quarterback.team}</td>
                                    <td>{quarterback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    </tbody>
                </table>
            </center>
        </div>
    );
}