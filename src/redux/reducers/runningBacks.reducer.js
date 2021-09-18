const runningBacksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RUNNINGBACKS':
            return action.payload;
        default:
            return state;
    }
};

// runningbacks will be on the redux state at:
// state.runningbacks
export default runningBacksReducer;