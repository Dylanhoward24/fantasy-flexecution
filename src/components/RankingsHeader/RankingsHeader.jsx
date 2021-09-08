import { Link } from 'react-router-dom';

export default function RankingsHeader() {
    return (
        <div className="rankingLinks">
            <Link className="rankingLink" exact to="/rbRankings">
                <h4>Running Backs</h4>
            </Link>
            <Link className="rankingLink" exact to="/teRankings">
                <h4>Tight Ends</h4>
            </Link>
            <Link className="rankingLink" exact to="/qbRankings">
                <h4>Quarterbacks</h4>
            </Link>
            <Link className="rankingLink" exact to="/wrRankings">
                <h4>Wide Receivers</h4>
            </Link>
        </div>
    );
}