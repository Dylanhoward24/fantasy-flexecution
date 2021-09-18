const quarterbacksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_QUARTERBACKS':
            return action.payload;
        default:
            return state;
    }
};

// quarterbacks will be on the redux state at:
// state.quarterbacks
export default quarterbacksReducer;