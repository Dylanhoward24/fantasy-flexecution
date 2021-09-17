const brettRunningbacksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BRETT_RUNNINGBACKS':
            return action.payload;
        default:
            return state;
    }
};

// brettRunningbacks will be on the redux state at:
// state.brettRunningbacks
export default brettRunningbacksReducer;