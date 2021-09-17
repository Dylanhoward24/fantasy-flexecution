const kyleRunningbacksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_KYLE_RUNNINGBACKS':
            return action.payload;
        default:
            return state;
    }
};

// kyleRunningbacks will be on the redux state at:
// state.kyleRunningbacks
export default kyleRunningbacksReducer;