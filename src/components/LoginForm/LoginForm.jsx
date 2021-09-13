import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import './LoginForm.css';

function LoginForm() {
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
      <div id="loginForm">
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
            <input type="password" id="password" value={password} placeholder="Password" rows="1" cols="50"
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div id="cancelLoginBtns">
            <button id="cancelBtn" onClick={() => history.push('/home')}>Cancel</button>
            <button id="loginBtn" onClick={login}>Login</button>
          <div id="registerOption">
            <p>Not registered yet? No problem!</p>
            <button onClick={() => history.push('/registration')}>Register</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;


