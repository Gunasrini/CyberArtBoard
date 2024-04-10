import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/images/logo.PNG';
import GoogleLoginSignup from './GoogleLoginSignup';
import FacebookLogin from './FacebookLogin';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    

    const userLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please enter both username and password.');
            return; 
        }
        const loginUrl = 'https://cyberartboard.zeroinfo.in/api/post-login';
        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: username,
                    password: password,
                }),
            });

            const data = await response.json();
            console.log("testttttttttttttt", data);
            if (response.ok) {
                console.log('Login Successful:', data);
                localStorage.setItem('user', JSON.stringify({
                    name: data.user.name,
                    email: data.user.email,
                }));
                navigate('/');
            } else {
                setError("Username or Password is incorrect!"); 
            }
        } catch (error) {
            console.log('an error occur:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <div className='mx-auto login-container'>
                <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                    <h2 className='login-title'>Login</h2>
                </div>
                <div className='login-form'>
                    <div className='mb-4'>
                        <label>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                    <div className='text-center'>
                        <button onClick={userLogin} className='btn btn-primary login-width'>
                            Login
                        </button>
                    </div>
                    <div className='login-signup-info'>
                        <Link to="/signup" className='btn highlighted-text'>
                            Signup
                        </Link>
                        <Link to="/forgot-password" className='btn text-primary'>
                            Forgot Password
                        </Link>
                    </div>
                    <div className='social-logins'>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <GoogleLoginSignup />
                            <FacebookLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}