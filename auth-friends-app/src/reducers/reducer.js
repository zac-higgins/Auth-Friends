import { SET_USER_ID, GET_FRIENDS_LOADING, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILED } from '../actions/actions';

const initialState = {
    userID: -1,
    friends: [],
    error: null,
    isGetting: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                userID: action.payload
            };
        case GET_FRIENDS_LOADING:
            return {
                ...state,
                isGetting: true,
                error: null
            };
        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isGetting: false,
                error: null
            }
        case GET_FRIENDS_FAILED:
            return {
                ...state,
                friends: [],
                isGetting: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;