import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="header">
      <Link to="/home">
        <h1 className="header-title">Fantasy Flexecution</h1>
      </Link>
      <div>
          <Link className="headerLink" to="/login">
            Login
          </Link>
          <Link className="headerLink" to="/registration">
            Register
          </Link>
          <img className="logo" src="https://m.media-amazon.com/images/I/51zTw14COAL._SL500_.jpg" />
      </div>
    </div>
  );
}

export default Nav;
