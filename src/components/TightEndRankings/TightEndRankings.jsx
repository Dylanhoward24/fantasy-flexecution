import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import './TightEndRankings.css';

export default function TightEndRankings() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_TIGHTENDS' });
    }, []);

    // global state
    const hosts = useSelector((store) => store.hosts);
    const tightEnds = useSelector((store) => store.tightEnds);

    return (
        <div className="container">
            <h1>Tight End Rankings</h1>
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
            </center>
        </div>
    );
}