import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { signInRequest } from './../signInSlice';


function SignIn(props) {
    let history = useHistory();
    let location = useLocation();
    const dispatch = useDispatch();
    let { from } = location.state || { from: { pathname: "/" } };

    let sign = () => {
        window.alert("fdf");
        dispatch(signInRequest());
        history.replace(from);
    }

    return (
        <div>
            <button onClick={() => { sign() }}>sfdf</button>
        </div>
    );
}

export default SignIn;