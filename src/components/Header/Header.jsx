import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  function logoutUser() {
    dispatch({
      type: 'LOGOUT'
    });
    history.push('/login');
  }

  return (
    <div className="header">

      <div className="upperHeader">
        <h1 className="header-title">Fantasy Flexecution</h1>
        <div>
            <img className="logo" src="https://m.media-amazon.com/images/I/51zTw14COAL._SL500_.jpg" />
        </div>
      </div>

      <div className="lowerHeader">
        <div className="lowerLeftHeader">
          <Link className="navLink" to="/home">
            <p>Home</p>
          </Link>
          <Link className="navLink" to="/podcasts">
            <p>Podcasts</p>
          </Link>
          <div className="dropdown">
            <a className="navLink" to="/all-rankings">
              <p>Rankings</p>
            </a>
            <div className="dropdown-content">
              <a onClick={() => history.push('/qb-rankings')}>Quarterbacks</a>
              <a onClick={() => history.push('/rb-rankings')}>Running Backs</a>
              <a onClick={() => history.push('/wr-rankings')}>Wide Receivers</a>
              <a onClick={() => history.push('/te-rankings')}>Tight Ends</a>
            </div>
          </div>
          {user.auth_level !== 'host' ?
          <>
          </>
          :
          <div className="dropdown">
            <Link className="navLink" to="/home">
              <p>Admin</p>
            </Link>
            <div className="dropdown-content">
              <a onClick={() => history.push('/edit-add-players')}>Edit / Add Players</a>
              <a onClick={() => history.push('/modify-tags')}>Modify Tags</a>
              <a onClick={() => history.push('/edit-coming-up')}>Edit Coming Up</a>
              <a onClick={() => history.push('/edit-about-page')}>Edit About Page</a>
            </div>
          </div>
          }
        </div>
        <div className="lowerRightHeader">
          {user.id ?
            <>
              <button className="navButton" 
                onClick={logoutUser}
              >Logout</button>
            </>
            :
            <>
              <Link className="navLink" to="/login">
                <p>Login</p>
              </Link>
              <Link className="navLink" to="/registration">
                <p>Register</p>
              </Link>
            </>
          }
        </div>
      </div>

    </div>
  );
}

export default Header;
