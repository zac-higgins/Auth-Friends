import axios from "axios";

export const SET_USER_ID = "SET_USER_ID";
export const GET_FRIENDS_LOADING = "GET_FRIENDS_LOADING";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILED = "GET_FRIENDS_FAILED";

export const setUserID = (userID) => dispatch => {
    dispatch({ type: SET_USER_ID, payload: userID });
}

export const friendsLoading = () => ({
    type: GET_FRIENDS_LOADING
});
export const friendsLoadingSuccess = data => ({
    type: GET_FRIENDS_SUCCESS,
    payload: data
});
export const friendsLoadingFailed = error => ({
    type: GET_FRIENDS_FAILED,
    payload: error
});

export function getFriendsList() {
    return function (dispatch) {
        dispatch(friendsLoading());

        return axios
            .create({
                headers: {
                    authorization: sessionStorage.getItem("token")
                }
            })
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log("Friends List", res);
                dispatch(friendsLoadingSuccess(res.data));
            })
            .catch(err => dispatch(friendsLoadingFailed(err)))
    }
}