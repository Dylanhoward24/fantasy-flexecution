import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './LandingPage.css';

export default function LandingPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);

  let [requestInfo, setRequestInfo] = useState('');

  function submitRequest() {
    dispatch({
      type: 'SUBMIT_LISTENER_REQUEST',
      payload: {
        requestInfo
      }
    });

    // clear the input field
    setRequestInfo('');

    alert('Thanks!');
  }

  return (
    <div className="container">
      {user.auth_level === 'admin' ?
      <>
        <div className="grid-container">
          <div id="item1">
            <h3>Welcome, {user.first_name}!</h3>
            <img id="adminLogo" src="https://m.media-amazon.com/images/I/51zTw14COAL._SL500_.jpg" />
          </div>
          <div id="item2">
            <h3>Unanswered listener requests: {0}</h3>
            <button className="adminBtns">Listener Requests</button>
          </div>
          <div id="item3">
            <div>
              <h3>Upload a podcast</h3>
              <button className="adminBtns">Upload Podcast</button>
            </div>
          </div>
        </div>
      </>
      :
      <>
        <div className="grid-container">
          <div id="item4">
            <h3>Recent Podcasts</h3>
          </div>
          <div id="item5">
            <h3>What do you want to hear on our show?</h3>
            <textarea value={requestInfo} rows="8" cols="50"
              placeholder="Submit your request here. We'll
              address it in a future show!"
              onChange={(e) => setRequestInfo(e.target.value)}/>
            <button id="submitBtn" onClick={submitRequest}>Submit</button>
          </div>
          <div id="item6">
            <h3>Coming Up</h3>
          </div>
        </div>
      </>
      }
    </div>
  );
}
