const playersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PLAYERS':
        return action.payload;
      default:
        return state;
    }
};

// players will be on the redux state at:
// state.players
export default playersReducer;
 