import ActionTypes from '../constant/constant';
const INITIAL_STATE = {
    USERDATA: "",
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCHQUEUE:
            return ({
                ...state,
                fetchQueue: action.payload
            })
        default:
            return state;
    }
}