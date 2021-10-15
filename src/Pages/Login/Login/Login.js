import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInUserinGoogle } = useAuth()
    return (
        <div>
            <h2> Please Login</h2>
            <button onClick={singInUserinGoogle} className="btn btn-warning">Google Sing In</button>
        </div>
    );
};

export default Login;