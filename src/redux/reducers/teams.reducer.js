const teamsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TEAMS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.teams
  export default teamsReducer;