import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.css';
import { auth } from '../../firebase'

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to='/'>
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/clone-e814f.appspot.com/o/Logo.png?alt=media&token=de9f4e2d-8cb0-4ea2-9eee-84f8e0e0acb8" 
          alt="logo" 
          className="login__logo" 
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to the Hardware Shop Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
        </p>

        <button onClick={register} className="login__registerButton">Create your Account</button>
      </div>
    </div>
  )
}

export default Login;