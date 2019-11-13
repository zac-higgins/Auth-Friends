import { SET_USER_ID } from '../actions/actions';

const initialState = {
    userID: -1
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                userID: action.payload
            };
        default:
            return state;
    }
}

export default reducer;