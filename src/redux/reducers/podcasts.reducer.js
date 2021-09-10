const podcastsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PODCASTS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.podcasts
  export default podcastsReducer;