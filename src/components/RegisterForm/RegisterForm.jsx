import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './RegisterForm.css';

export default function RegisterForm() {
  const errors = useSelector((store) => store.errors);
  const history = useHistory();
  const dispatch = useDispatch();

  let [newUser, setNewUser] = useState({
    username: '', password: '', authLevel: 'user', 
    firstName: '', lastName: '', emailAddress: '', about: ''
  });

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        newUser
      },
    });

    // clear the input fields
    setNewUser({
      username: '', password: '', authLevel: 'user', 
      firstName: '', lastName: '', emailAddress: '', about: ''
    });

    // history.push('/success')
  }; // end registerUser

  return (
    <div className="container">
      <div id="registrationForm">
        <h2 className="registrationH2">Tell us about yourself</h2>
        <form>
          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}
          <div className="inputFields">
            {/* capture the value of the user's first name */}
            <textarea id="firstName" value={newUser.firstName} placeholder="First name" rows="1" cols="20"
              onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}/>
            {/* capture the value of the user's last name */}
            <textarea id="lastName" value={newUser.lastName} placeholder="Last name" rows="1" cols="20"
              onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}/>
          </div>
          <div className="inputFields">
            {/* capture the value of the user's email address */}
            <textarea id="emailAddress" value={newUser.emailAddress} placeholder="Email address" rows="1" cols="50"
              onChange={(e) => setNewUser({...newUser, emailAddress: e.target.value})}/>
          </div>
          <div className="inputFields">
            {/* capture the about value of the user */}
            <textarea id="about" value={newUser.about} placeholder="Tell us more about yourself (how long you've
              been playing fantasy football, your favorite team, preferred format, etc)" rows="3" cols="50"
              onChange={(e) => setNewUser({...newUser, about: e.target.value})}/>
          </div>
          <h2 className="registrationH2">Account information</h2>
          <div className="inputFields">
            {/* capture the value of the user's username */}
            <textarea id="username" value={newUser.username} placeholder="Username" rows="1" cols="50"
              onChange={(e) => setNewUser({...newUser, username: e.target.value})}/>
          </div>
          <div className="inputFields">
            {/* capture the value of the user's password */}
            <textarea id="password" value={newUser.password} placeholder="Password" rows="1" cols="50"
              onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>
          </div>
          <div id="cancelRegisterBtns">
            <button id="cancelBtn" onClick={() => history.push('/home')}>Cancel</button>
            <button id="registerBtn" onClick={registerUser}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
