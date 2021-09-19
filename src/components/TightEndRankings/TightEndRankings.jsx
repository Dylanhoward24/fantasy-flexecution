import { useState } from 'react';
import { useSelector } from 'react-redux';
import RankingsHeader from '../RankingsHeader/RankingsHeader';
import AllTightEnds from '../AllTightEnds/AllTightEnds';
import BrettTightEnds from '../BrettTightEnds/BrettTightEnds';
import KyleTightEnds from '../KyleTightEnds/KyleTightEnds';
import './TightEndRankings.css';

export default function TightEndsRankings() {    
    // local state
    let [defaultHostView, setDefaultHostView] = useState('');

    // global state
    const hosts = useSelector((store) => store.hosts);

    switch (defaultHostView) {
        case '':
            return (
                <div className="container">
                    <h1>Tight End Rankings</h1>
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
                        <AllTightEnds />
                    </center>
                </div>
            );
        case 'Brett':
            return (
                <div className="container">
                    <h1>Tight End Rankings</h1>
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
                        <BrettTightEnds />
                    </center>
                </div>
            );
        case 'Kyle':
            return (
                <div className="container">
                    <h1>Tight End Rankings</h1>
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
                        <KyleTightEnds />
                    </center>
                </div>
            );
        default:
            return null;
    }
}