import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [SignInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={() => SignInWithGoogle()}>Sign in google</button>
            </div>
            <form action="">
                <input type="text" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;