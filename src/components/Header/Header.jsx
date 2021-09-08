import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector((store) => store.user);

  return (
    <div className="header">

      <div className="upperHeader">
        <Link to="/home">
          <h1 className="header-title">Fantasy Flexecution</h1>
        </Link>
        <div>
            <img className="logo" src="https://m.media-amazon.com/images/I/51zTw14COAL._SL500_.jpg" />
        </div>
      </div>

      <div className="lowerHeader">
        <div className="lowerLeftHeader">
          <Link className="navLink" to="/home">
            <p>Home</p>
          </Link>
          <Link className="navLink" to="/overallranks">
            <p>Rankings</p>
          </Link>
          <Link className="navLink" to="/podcasts">
            <p>Podcasts</p>
          </Link>
        </div>
        <div className="lowerRightHeader">
          <Link className="navLink" to="/login">
            <p>Login</p>
          </Link>
          <Link className="navLink" to="/registration">
            <p>Register</p>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Header;
