const listenerRequestsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LISTENER_REQUESTS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.listenerRequests
  export default listenerRequestsReducer;