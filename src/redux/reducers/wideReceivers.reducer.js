const wideReceiversReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WIDERECEIVERS':
            return action.payload;
        case 'SET_BRETT_WIDERECEIVERS':
            return action.payload;
        case 'SET_KYLE_WIDERECEIVERS':
            return action.payload;
        default:
            return state;
    }
};

// wideReceivers will be on the redux state at:
// state.wideReceivers
export default wideReceiversReducer;