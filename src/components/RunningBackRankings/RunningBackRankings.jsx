import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import './RunningBackRankings.css';

export default function RunningBackRankings() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_RUNNINGBACKS' });
    }, []);

    // global state
    const hosts = useSelector((store) => store.hosts);
    const runningBacks = useSelector((store) => store.runningBacks);

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
                        {hosts.map((host, i) => (
                            <th key={i}>Tier <br /> ({host.first_name})</th>
                        ))}
                        <th className="tagsTableDisplay">Tags</th>
                    </tr>
                    </thead>
                    <tbody>
                    {runningBacks.map((runningback, i) => (
                        <tr key={i}>
                            <td>{runningback.firstName} {runningback.lastName}</td>
                            <td>{runningback.team}</td>
                            {runningback.tierName.map((tierName, i) => (
                                <td key={i}>{tierName}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}