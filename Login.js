import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'



function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    navigate('/');
                }
            })
            .catch(error=>alert(error.message))
    }

    const register = e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    navigate('/');
                }
            })
            .catch(error=>alert(error.message))
    }


    return (
        <div className='Login'>
            <Link to='/'>
                <img
                    className='SignIn__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png'>
                </img>
            </Link>

            <div className='login__container'>

                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange=
                    {e =>setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange=
                    {e =>setPassword(e.target.value)}></input>

                    <button className='login__signINButton' type='submit' onClick={signIn}>Sign In</button>

                </form>
                <button className='login__createAccountButton' onClick={register}>create Your Acoount</button>
                


            </div>



        </div>

    )
}

export default Login