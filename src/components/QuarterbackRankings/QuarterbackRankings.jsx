import { useState } from 'react';
import { useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import AllQuarterbacks from '../AllQuarterbacks/AllQuarterbacks';
import BrettQuarterbacks from '../BrettQuarterbacks/BrettQuarterbacks';
import KyleQuarterbacks from '../KyleQuarterbacks/KyleQuarterbacks';
import './QuarterbackRankings.css';

export default function QuarterbackRankings() {    
    // local state
    let [defaultHostView, setDefaultHostView] = useState('');

    // global state
    const hosts = useSelector((store) => store.hosts);

    switch (defaultHostView) {
        case '':
            return (
                <div className="container">
                    <h1>Quarterback Rankings</h1>
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
                        <AllQuarterbacks />
                    </center>
                </div>
            );
        case 'Brett':
            return (
                <div className="container">
                    <h1>Quarterback Rankings</h1>
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
                        <BrettQuarterbacks />
                    </center>
                </div>
            );
        case 'Kyle':
            return (
                <div className="container">
                    <h1>Quarterback Rankings</h1>
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
                        <KyleQuarterbacks />
                    </center>
                </div>
            );
        default:
            return null;
    }
}