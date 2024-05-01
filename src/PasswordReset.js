import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, json } from 'react-router-dom'
import logo from '../src/assets/images/logo.PNG';

const PasswordReset = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [Token,setToten]=useState('');
    const [Email,setEmail]=useState('');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const email=params.get('email');
        setToten(token);
        setEmail(email);
    }, [location.search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        // const token = new URLSearchParams(location.search).get('token');
        try {
            const response = await fetch('https://cyberartboard.zeroinfo.in/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:Email,
                    token: Token,
                    password: password,
                    password_confirmation:confirmPassword

                }),
            });
            if (response.ok) {
                setSuccess(true);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred. Please try again.');
        }
    };

        const clickShowPassword=()=>{
            setShowPassword(!showPassword);
        }
        const clickShowConfirmPassword=()=>{
            setShowConfirmPassword(!showConfirmPassword);
        }

    if (success) {
        return <div className='mx-auto login-container'>
        <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand">
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                </div>
                <p>Your password reset was successful. <Link to="/login">Click to login</Link> </p>
    </div>
    }

    return (
        <div className='mx-auto login-container'>
            <div className='text-center mb-4 pb-2'>
                    <Link className="navbar-brand">
                        <img src={logo} title='Cyber ArtBoard' alt="Cyber ArtBoard" className="login-logo" />
                    </Link>
                    <h2 className='login-title'>Reset Password</h2>
                </div>
            
            <form onSubmit={handleSubmit}>
            {/* <div className='mb-4'>
                        <label>Email</label>
                        <input type='text' className='form-control' />
                    </div> */}
            <div className='mb-4 password-input'>
                        <label>New Password</label>
                        <input type={showPassword?'text':'password'} className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <span className='psw-icon' onClick={clickShowPassword}>
                                {showPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                            </span>
                    </div>
                    <div className='mb-4 password-input'>
                        <label>Confirm Password</label>
                        <input  type={showConfirmPassword?'text':'password'} className='form-control' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                        <span className='psw-icon' onClick={clickShowConfirmPassword}>
                                {showConfirmPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                            </span>
                    </div>
                    {error && <div className="error">{error}</div>}

                    <button className='btn btn-primary login-width' type="submit" disabled={!password || !confirmPassword}>Reset Password</button>
            </form>
        </div>
    );
};

export default PasswordReset;
