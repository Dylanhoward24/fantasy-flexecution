import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
          <Link className="navLink" to="/allRankings">
            <p>Rankings</p>
          </Link>
          <Link className="navLink" to="/podcasts">
            <p>Podcasts</p>
          </Link>
          {user.auth_level === 'admin' ?
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
          :
          <>
          </>
          }
        </div>
        <div className="lowerRightHeader">
          {user.id ?
            <>
              <button className="navButton" 
                onClick={() => dispatch({ type: 'LOGOUT' })}
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
