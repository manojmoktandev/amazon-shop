import React,{useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import './../css/Login.css';
import { auth } from './../config/firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // redirect to home page
                history.push("/");
            })
            .catch((e) => alert(e.message));
        
    }
    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            
            })
            .catch((e) => alert(e.message));

        
    }
    return (
        <div className="login"
        >
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className="login__logo" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)}  type="password" />
                    <button type="submit" onClick ={login} className="login__signin">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button onClick={register}className="login__register"> Create your Amazon Account</button>
            </div>

            
        </div>
    )
}

export default Login;
