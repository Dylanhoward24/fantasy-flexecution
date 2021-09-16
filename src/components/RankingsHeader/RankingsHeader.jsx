import { Link } from 'react-router-dom';

export default function RankingsHeader() {
    return (
        <div className="rankingLinks">
            <Link className="rankingLink" exact to="/qb-rankings">
                <h4>Quarterbacks</h4>
            </Link>
            <Link className="rankingLink" exact to="/rb-rankings">
                <h4>Running Backs</h4>
            </Link>
            <Link className="rankingLink" exact to="/wr-rankings">
                <h4>Wide Receivers</h4>
            </Link>
            <Link className="rankingLink" exact to="/te-rankings">
                <h4>Tight Ends</h4>
            </Link>
        </div>
    );
}