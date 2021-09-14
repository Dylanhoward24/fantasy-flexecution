const newPlayerRankingsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NEW_PLAYER_RANKING':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.hosts
  export default newPlayerRankingsReducer;