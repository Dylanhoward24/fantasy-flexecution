import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './LandingPage.css';

export default function LandingPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const comingUp = useSelector((store) => store.comingUp);
  const podcasts = useSelector((store) => store.podcasts);
  const podcastsToDisplay = podcasts.slice(((podcasts.length)-2), podcasts.length);

  let [requestInfo, setRequestInfo] = useState('');

  // to format the appending date of the recent podcasts
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

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
            <div id="listenerRequests">
              <h3>Unanswered listener requests: {0}</h3>
              <button className="adminBtns" onClick={() => history.push('/listener-requests')}>
                Listener Requests
              </button>
            </div>
            <div id="uploadPodcast">
              <h3>Upload a podcast</h3>
              <button className="adminBtns" onClick={() => history.push('/upload-podcast')}>
                Upload Podcast
              </button>
            </div>
          </div>
        </div>
      </>
      :
      <>
        <div className="grid-container">
          <div id="item4">
            <h3>Recent Podcasts</h3>
            <div id="podcastDisplayArea">
              {podcastsToDisplay.map((podcast, i) => (
                <div key={i}>
                  <img className="podcastLogo" src={podcast.image_source} />
                  <p>{formatDate(podcast.time_uploaded)}</p>
                  <p>{podcast.description}</p>
                </div>
              ))}
            </div>
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
            <ul id="comingUpDisplay">
              {comingUp.map((item, i) => (
                <li className="listItem" key={i}>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
      }
    </div>
  );
}
