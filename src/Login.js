import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../src/assets/images/logo.png';
import GoogleLoginSignup from './GoogleLoginSignup';
import FacebookLogin from './FacebookLogin';

export default function Login() {
    return (
        <>
            <div className='col-lg-3 mx-auto login-container'>
                <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                    <h2 className='login-title'>Login</h2>
                </div>
                <div className='login-form'>
                    <div className='mb-4'>
                        <label>Username</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='mb-4'>
                        <label>Password</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='text-center'>
                        <Link to='/' className='btn btn-primary login-width'>Login</Link>
                    </div>
                    <div className='login-signup-info'>
                        <Link to="/signup" className='btn highlighted-text'>Signup</Link>
                        <Link to="/forgot-password" className='btn text-primary'>Forgot Password</Link>
                    </div>
                    <div className='social-logins'>
                        <GoogleLoginSignup />
                        <FacebookLogin />
                    </div>
                </div>
            </div>
        </>
    )
}