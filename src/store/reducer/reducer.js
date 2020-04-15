import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    USERDATA: "aaa",
    fetchQueue: [],
  
}

export default (state = INITIAL_STATE, action) => {
    console.log(state.addToCart,"addToCartaddToCartaddToCart")
    switch (action.type) {
        case ActionTypes.FETCHQUEUE:
            return ({
                ...state,
                fetchQueue: action.payload
            })
        case ActionTypes.USERDATA:
            return ({
                ...state,
                USERDATA: action.payload
            })
       
        default:
            return state;
    }

}