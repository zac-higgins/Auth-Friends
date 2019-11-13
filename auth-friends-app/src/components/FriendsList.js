import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getFriendsList } from '../actions/actions';

const FriendsList = props => {

    useEffect(() => {
        props.dispatch(getFriendsList())
    }, [])
    return (
        <div>
            <h1>Friends List</h1>
            <ul>
                {props.friends.map(friend => {
                    return (
                        <li key={friend.id}>
                            {friend.name}, Age: {friend.age}, Email: {friend.email}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

// const mapStateToProps = state => ({
//     state
// })

// export default connect(
//     mapStateToProps,
// )(FriendsList);

export default connect(state => {
    return state;
})(FriendsList);