const brettQuarterbacksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BRETT_QUARTERBACKS':
            return action.payload;
        default:
            return state;
    }
};

// brettQuarterbacks will be on the redux state at:
// state.brettQuarterbacks
export default brettQuarterbacksReducer;