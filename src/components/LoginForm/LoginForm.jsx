import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import './LoginForm.css';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const history = useHistory();
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username,
          password
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div className="container">
      <div className="grid-container">
        <div id="item1">
          <img id="adminLogo" src="https://m.media-amazon.com/images/I/51zTw14COAL._SL500_.jpg" />
        </div>
        <div id="item2">
          <h2 className="loginH2">Login</h2>
          <form>
            {errors.loginMessage && (
            <h3 className="alert" role="alert">
            {errors.loginMessage}
            </h3>
            )}
            <div className="inputFields">
            {/* capture the value of the user's username */}
            <textarea id="username" value={username} placeholder="Username" rows="1" cols="50"
            onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="inputFields">
            {/* capture the value of the user's username */}
            <input type="password" className="password" value={password} placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div id="cancelLoginBtns">
            <button className="btn" onClick={() => history.push('/home')}>Cancel</button>
            <button className="btn" onClick={login}>Login</button>
            <div id="registerOption">
            <p>Not registered yet? No problem!</p>
            <button className="btn" onClick={() => history.push('/registration')}>Register</button>
            </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <p></p>
    </div>
  );
}


