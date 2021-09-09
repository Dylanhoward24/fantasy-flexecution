import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './LandingPage.css';

export default function LandingPage() {
  const dispatch = useDispatch();

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
      <div className="grid-container">
        <div id="item1">
          <h3>Recent Podcasts</h3>
          {}
        </div>
        <div id="item2">
          <h3>What do you want to hear on our show?</h3>
          <textarea value={requestInfo} rows="8" cols="50"
            placeholder="Submit your request here. We'll
            address it in a future show!"
            onChange={(e) => setRequestInfo(e.target.value)}/>
          <button id="submitBtn" onClick={submitRequest}>Submit</button>
        </div>
        <div id="item3">
          <h3>Coming Up</h3>
        </div>
      </div>
    </div>
  );
}
