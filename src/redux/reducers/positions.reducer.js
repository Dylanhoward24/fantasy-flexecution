const positionsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_POSITIONS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.positions
  export default positionsReducer;