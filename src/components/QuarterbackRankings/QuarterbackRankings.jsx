import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import './QuarterbackRankings.css';

export default function QuarterbackRankings() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_QUARTERBACKS' });
        // for stretch (sorting)
        // dispatch({ type: 'FETCH_BRETT_QUARTERBACKS'});
        // dispatch({ type: 'FETCH_KYLE_QUARTERBACKS'});
    }, []);

    // global state
    const hosts = useSelector((store) => store.hosts);
    const quarterbacks = useSelector((store) => store.quarterbacks);
    console.log('quarterbacks are', quarterbacks);
    // for stretch (sorting)
    // const brettQuarterbacks = useSelector((store) => store.brettQuarterbacks);
    // const kyleQuarterbacks = useSelector((store) => store.kyleQuarterbacks)

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
                        {hosts.map((host, i) => (
                            <th key={i}>Tier <br /> ({host.first_name})</th>
                        ))}
                        <th className="tagsTableDisplay">Tags</th>
                    </tr>
                    </thead>
                    <tbody>
                    {quarterbacks.map((quarterback, i) => (
                        <tr key={i}>
                            <td>{quarterback.firstName} {quarterback.lastName}</td>
                            <td>{quarterback.team}</td>
                            {quarterback.tierName.map((tierName, i) => (
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