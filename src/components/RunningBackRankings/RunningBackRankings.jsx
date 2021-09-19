import { useState } from 'react';
import { useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import AllRunningBacks from '../AllRunningBacks/AllRunningBacks';
import BrettRunningBacks from '../BrettRunningBacks/BrettRunningBacks';
import KyleRunningBacks from '../KyleRunningBacks/KyleRunningBacks';
import './RunningBackRankings.css';

export default function RunningBackRankings() {    
    // local state
    let [defaultHostView, setDefaultHostView] = useState('');

    // global state
    const hosts = useSelector((store) => store.hosts);

    switch (defaultHostView) {
        case '':
            return (
                <div className="container">
                    <h1>Running Back Rankings</h1>
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
                        <AllRunningBacks />
                    </center>
                </div>
            );
        case 'Brett':
            return (
                <div className="container">
                    <h1>Running Back Rankings</h1>
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
                        <BrettRunningBacks />
                    </center>
                </div>
            );
        case 'Kyle':
            return (
                <div className="container">
                    <h1>Running Back Rankings</h1>
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
                        <KyleRunningBacks />
                    </center>
                </div>
            );
        default:
            return null;
    }
}