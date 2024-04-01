import { Link } from 'react-router-dom'
import logo from '../src/assets/images/logo.png';

import React from 'react'

export default function SignUp() {
    return (
        <>
            <div className='col-lg-3 mx-auto login-container'>
                <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                    <h2 className='login-title'>Create AI Account</h2>
                </div>
                <div className='login-form'>
                    <div className='mb-4'>
                        <label>Username</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='mb-4'>
                        <label>Email</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='mb-4'>
                        <label>Password</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='text-center'>
                        <Link to="/login" className='btn btn-primary login-width'>Create</Link>
                    </div>
                    <div className='login-signup-info'>
                        <Link to="/login" className='btn highlighted-text ms-0'>Already Have an Account</Link>
                    </div>
                </div>
            </div>
        </>
    )
}