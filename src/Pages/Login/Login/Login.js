import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInUserinGoogle } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || "/booking";
    // const handelGoogleLogin = () => {
    //     singInUserinGoogle()
    //     // .then(result => {

    //     //     history.push(redirect_uri);

    //     // })
    // }

    return (
        <div>
            <h2> Please Login</h2>
            <button onClick={singInUserinGoogle} className="btn btn-warning">Google Sing In</button>
        </div>
    );
};

export default Login;