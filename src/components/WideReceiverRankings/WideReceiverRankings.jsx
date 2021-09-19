import { useState } from 'react';
import { useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import AllWideReceivers from '../AllWideReceivers/AllWideReceivers';
import BrettWideReceivers from '../BrettWideReceivers/BrettWideReceivers';
import KyleWideReceivers from '../KyleWideReceivers/KyleWideReceivers';
import './WideReceiverRankings.css';

export default function WideReceiversRankings() {    
    // local state
    let [defaultHostView, setDefaultHostView] = useState('');

    // global state
    const hosts = useSelector((store) => store.hosts);

    switch (defaultHostView) {
        case '':
            return (
                <div className="container">
                    <h1>Wide Receiver Rankings</h1>
                    <RankingsHeader />
                    <div className="hostViewSelector">
                        View rankings by host:
                        <select className="selector" value={defaultHostView}
                            onChange={(e) => setDefaultHostView(e.target.value)}>
                            <option value=''>All Hosts</option>
                            {hosts.map((host, i) => (
                                <option key={i} value={host.first_name}>
                                    {host.first_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <center>
                        <AllWideReceivers />
                    </center>
                </div>
            );
        case 'Brett':
            return (
                <div className="container">
                    <h1>Wide Receiver Rankings</h1>
                    <RankingsHeader />
                    <div className="hostViewSelector">
                        View rankings by host:
                        <select className="selector" value={defaultHostView}
                            onChange={(e) => setDefaultHostView(e.target.value)}>
                            <option value=''>All Hosts</option>
                            {hosts.map((host, i) => (
                                <option key={i} value={host.first_name}>
                                    {host.first_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <center>
                        <BrettWideReceivers />
                    </center>
                </div>
            );
        case 'Kyle':
            return (
                <div className="container">
                    <h1>Wide Receiver Rankings</h1>
                    <RankingsHeader />
                    <div className="hostViewSelector">
                        View rankings by host:
                        <select className="selector" value={defaultHostView}
                            onChange={(e) => setDefaultHostView(e.target.value)}>
                            <option value=''>All Hosts</option>
                            {hosts.map((host, i) => (
                                <option key={i} value={host.first_name}>
                                    {host.first_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <center>
                        <KyleWideReceivers />
                    </center>
                </div>
            );
        default:
            return null;
    }
}