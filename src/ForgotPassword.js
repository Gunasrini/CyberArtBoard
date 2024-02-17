import { Link } from 'react-router-dom'
import logo from '../src/assets/images/logo.PNG';

import React from 'react'

export default function ForgotPassword() {
    return (
        <>
            <div className='col-lg-3 mx-auto login-container'>
                <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                    <h2 className='login-title'>Forgot Password</h2>
                </div>
                <div className='login-form'>
                    <div className='mb-4'>
                        <label>Username or Email</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='text-center'>
                        <Link to="/login" className='btn btn-primary login-width'>Enter</Link>
                    </div>
                </div>
            </div>
        </>
    )
}