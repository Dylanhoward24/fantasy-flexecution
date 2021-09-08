import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <div className="grid-container">
        <div id="item1">
          <h3>Recent Podcasts</h3>
        </div>
        <div id="item2">
          <h3>What do you want to hear on our show?</h3>
        </div>
        <div id="item3">
          <h3>Coming Up</h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
