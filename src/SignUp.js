import { Link } from 'react-router-dom'
import logo from '../src/assets/images/logo.PNG';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function register() {
        const payload = {
            user_name: username,
            email: email,
            password: password
        };

        const formData = new URLSearchParams(payload).toString();
        fetch('https://cyberartboard.zeroinfo.in/api/registersation-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Registration failed');
                }
            })
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        setUsername('');
                        setEmail('');
                        setPassword('');
                        navigate('/login');
                    }
                });
            })
            .catch(error => {
                console.error('Registration error:', error);
            });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>
            <div className='mx-auto login-container'>
                <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                    <h2 className='login-title'>Create AI Account</h2>
                </div>
                <div className='login-form'>
                    <div className='mb-4'>
                        <label>Name</label>
                        <input value={username} onChange={(e) => (setUsername(e.target.value))} type='text' className='form-control' />
                    </div>
                    <div className='mb-4'>
                        <label>Email</label>
                        <input value={email} onChange={(e) => (setEmail(e.target.value))} type='text' className='form-control' />
                    </div>
                    <div className='mb-4 password-input'>
                        <label>Password</label>
                        <input value={password} onChange={(e) => (setPassword(e.target.value))} type={showPassword?'text':'password'} className='form-control' />
                        <span className='psw-icon' onClick={togglePasswordVisibility}>
                                {showPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                            </span>
                    </div>
                    <div className='text-center'>
                        <Link onClick={register} className='btn btn-primary login-width'>Create</Link>
                    </div>
                    <div className='login-signup-info'>
                        <Link to="/login" className='btn highlighted-text ms-0'>Already Have an Account</Link>
                    </div>
                </div>
            </div>
        </>
    )
}