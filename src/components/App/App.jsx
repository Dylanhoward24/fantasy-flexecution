// import framework and route library to navigate between components
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// import for use by our redux/sagas
import { useDispatch, useSelector } from 'react-redux';

// import our header and footer
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// allows us to prevent unauthenticated users from seeing things
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import our components
import AboutPage from '../AboutPage/AboutPage';
import AllRankings from '../AllRankings/AllRankings';
import ContactUs from '../ContactUs/ContactUs';
import LandingPage from '../LandingPage/LandingPage';
import ListenerRequests from '../ListenerRequests/ListenerRequests';
import LoginPage from '../LoginPage/LoginPage';
import Podcasts from '../Podcasts/Podcasts';
import RegisterPage from '../RegisterPage/RegisterPage';
import RunningBackRankings from '../RunningBackRankings/RunningBackRankings';
import TightEndRankings from '../TightEndRankings/TightEndRankings';
import QuarterbackRankings from '../QuarterbackRankings/QuarterbackRankings';
import WideReceiverRankings from '../WideReceiverRankings/WideReceiverRankings';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Header />
        <Switch>

          {/* ROUTES */}
          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/allRankings">
            <AllRankings />
          </Route>

          <Route exact path="/contactUs">
            <ContactUs />
          </Route>

          <Route exact path="/home">
            <LandingPage />
          </Route>

          <Route exact path="/podcasts">
            <Podcasts />
          </Route>

          <Route exact path="/rbRankings">
            <RunningBackRankings />
          </Route>

          <Route exact path="/teRankings">
            <TightEndRankings />
          </Route>

          <Route exact path="/qbRankings">
            <QuarterbackRankings />
          </Route>

          <Route exact path="/wrRankings">
            <WideReceiverRankings />
          </Route>

          {/* REDIRECTS */}
          <Redirect exact from="/" to="/home" />

          <Route exact path="/login">
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route exact path="/registration">
            {user.id ? <Redirect to="/home" /> : <RegisterPage />}
          </Route>

          {/* PROTECTED ROUTES */}
          {/* These display the route only if the user is logged in, and if
              not, it brings them to the login page*/}
          <ProtectedRoute exact path="/listenerRequests">
            <ListenerRequests />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
