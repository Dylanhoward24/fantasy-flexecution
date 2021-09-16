import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import './QuarterbackRankings.css';

export default function QuarterbackRankings() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_BRETT_QUARTERBACKS'});
        dispatch({ type: 'FETCH_KYLE_QUARTERBACKS'});
    }, []);

    // global state
    const brettQuarterbacks = useSelector((store) => store.brettQuarterbacks);
    const kyleQuarterbacks = useSelector((store) => store.kyleQuarterbacks)

    return (
        <div className="container">
            <h1>Quarterback Rankings</h1>
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
                    {brettQuarterbacks.map((quarterback, i) => {
                        if (quarterback.tier === 1) {
                            return (
                                <tr>
                                    <td>{quarterback.firstName} {quarterback.lastName}</td>
                                    <td>{quarterback.team}</td>
                                    <td>{quarterback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">Elite Upside</td>
                    </tr>
                    {brettQuarterbacks.map((quarterback, i) => {
                        if (quarterback.tier === 2) {
                            return (
                                <tr>
                                    <td>{quarterback.firstName} {quarterback.lastName}</td>
                                    <td>{quarterback.team}</td>
                                    <td>{quarterback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">Weekly Starter</td>
                    </tr>
                    {brettQuarterbacks.map((quarterback, i) => {
                        if (quarterback.tier === 3) {
                            return (
                                <tr>
                                    <td>{quarterback.firstName} {quarterback.lastName}</td>
                                    <td>{quarterback.team}</td>
                                    <td>{quarterback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">High Floor, Low Upside</td>
                    </tr>
                    {brettQuarterbacks.map((quarterback, i) => {
                        if (quarterback.tier === 4) {
                            return (
                                <tr>
                                    <td>{quarterback.firstName} {quarterback.lastName}</td>
                                    <td>{quarterback.team}</td>
                                    <td>{quarterback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">High Upside, Low Floor</td>
                    </tr>
                    {brettQuarterbacks.map((quarterback, i) => {
                        if (quarterback.tier === 5) {
                            return (
                                <tr>
                                    <td>{quarterback.firstName} {quarterback.lastName}</td>
                                    <td>{quarterback.team}</td>
                                    <td>{quarterback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">To Soon To Tell</td>
                    </tr>
                    {brettQuarterbacks.map((quarterback, i) => {
                        if (quarterback.tier === 6) {
                            return (
                                <tr>
                                    <td>{quarterback.firstName} {quarterback.lastName}</td>
                                    <td>{quarterback.team}</td>
                                    <td>{quarterback.tags}</td>
                                </tr>
                            );
                        }
                    })}
                    <tr>
                        <td className="tierLabel">Holds</td>
                    </tr>
                    {brettQuarterbacks.map((quarterback, i) => {
                        if (quarterback.tier === 7) {
                            return (
                                <tr>
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