import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import comingUp from './comingUp.reducer';
import podcasts from './podcasts.reducer';
import positions from './positions.reducer';
import listenerRequests from './listenerRequests.reducer';
import tags from './tags.reducers';
import teams from './teams.reducer';
import tiers from './tiers.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  comingUp, // array of {id, description} for coming up section of components
  podcasts, // array of podcasts for landing page and podcast components
  listenerRequests, // array of requests submitted by listeners on landing page
  tags, // array of tags that are associated with players, modified by admins
  positions, // array of positions that are associated with players, predefined
  teams, // array of teams that are associated with players, predefined
  tiers, // array of tiers to place players in based on performance categories
});

export default rootReducer;
