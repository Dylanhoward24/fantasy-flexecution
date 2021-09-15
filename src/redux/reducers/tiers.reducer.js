const tiersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TIERS':
        return action.payload;
      default:
        return state;
    }
};

// tiers will be on the redux state at:
// state.tiers
export default tiersReducer;
 