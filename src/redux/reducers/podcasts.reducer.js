const podcastsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PODCASTS':
        return action.payload;
      case 'SET_LANDING_PAGE_PODCASTS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // podcasts will be on the redux state at:
  // state.podcasts
  export default podcastsReducer;