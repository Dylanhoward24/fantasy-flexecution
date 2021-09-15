const hostsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_HOSTS':
        return action.payload;
      default:
        return state;
    }
};

// hosts will be on the redux state at:
// state.hosts
export default hostsReducer; 