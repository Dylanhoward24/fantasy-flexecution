const comingUpReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMING_UP':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.comingUp
  export default comingUpReducer;