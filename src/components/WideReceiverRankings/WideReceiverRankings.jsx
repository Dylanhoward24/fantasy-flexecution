import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import './WideReceiverRankings.css';

export default function WideReceiverRankings() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_WIDERECEIVERS' });
    }, []);

    // global state
    const hosts = useSelector((store) => store.hosts);
    const wideReceivers = useSelector((store) => store.wideReceivers);

    return (
        <div className="container">
            <h1>Wide Receiver Rankings</h1>
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
            </center>
        </div>
    );
}