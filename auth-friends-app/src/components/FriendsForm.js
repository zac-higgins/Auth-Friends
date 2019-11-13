import React, { useState } from "react";
import { connect } from "react-redux";
import axios from 'axios';

function FriendsForm(props) {
    const [friend, setFriend] = useState({ name: "", age: "", email: "" });

    const handleChange = event => {
        setFriend({ ...friend, [event.target.name]: event.target.value })
    };

    const submitForm = event => {
        event.preventDefault();
        // setFriend({ ...friend, id: Date.now() })
        axios
            .create({
                headers: {
                    authorization: sessionStorage.getItem("token")
                }
            })
            .post("http://localhost:5000/api/friends", friend);

    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" name="name" value={friend.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="age" placeholder="Age" value={friend.age} onChange={handleChange} />
                <input type="text" name="email" placeholder="Email" value={friend.email} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default connect(state => {
    return state;
})(FriendsForm);