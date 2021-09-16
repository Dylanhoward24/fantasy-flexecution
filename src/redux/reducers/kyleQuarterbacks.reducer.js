const kyleQuarterbacksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_KYLE_QUARTERBACKS':
            return action.payload;
        default:
            return state;
    }
};

// kyleQuarterbacks will be on the redux state at:
// state.kyleQuarterbacks
export default kyleQuarterbacksReducer;