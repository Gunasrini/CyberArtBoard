import { Link, json } from 'react-router-dom'
import logo from '../src/assets/images/logo.PNG';
import React, { useState } from 'react';

export default function ForgotPassword() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [verifyEmail,setVerifyEmail]=useState(false);


    const emailValidation = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email.');
            return;
        }
        const forgotPasswordUrl = 'https://cyberartboard.zeroinfo.in/api/forgot-password';
        try {
            const response = await fetch(forgotPasswordUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                }),
            });
    
            if (response.ok) {
                console.log('Password reset link sent successfully.');
                setSuccess('Password reset link sent successfully.');
                setVerifyEmail(true);
            } else {
                const errorData = await response.json();
                console.log('Error:', errorData.message);
                setError(errorData.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred. Please try again.');
        }
    };

    if(verifyEmail){
        return <div className='mx-auto login-container'>
                <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand">
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                </div>
                <p>Password reset link sent successfully. Check your email!</p>
            </div>
    }
    
    return (
            <div className='mx-auto login-container'>
                <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand">
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                    <h2 className='login-title'>Forgot Password</h2>
                </div>
                <div className='login-form'>
                    <div className='mb-4'>
                        <label>Enter Your Email</label>
                        <input type='text' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='text-center'>
                        <Link onClick={emailValidation} className='btn btn-primary login-width'>Enter</Link>
                    </div>
                </div>
                {error && <div className="error">{error}</div>}

            </div>
        
    );
}