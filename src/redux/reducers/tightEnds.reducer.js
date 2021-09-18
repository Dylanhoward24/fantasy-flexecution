const tightEndsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TIGHTENDS':
            return action.payload;
        default:
            return state;
    }
};

// tightEnds will be on the redux state at:
// state.tightEnds
export default tightEndsReducer;