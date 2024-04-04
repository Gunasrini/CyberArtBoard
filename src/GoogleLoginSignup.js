import React, { useState } from 'react';
import axios from 'axios';

export default function GoogleLoginSignup() {
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://cyberartboard.zeroinfo.in/api/redirect/google');
      setRedirectUrl(response.data.redirectUrl);
    } catch (error) {
      console.error('Error initiating Google login:', error);
    }
  };

  const handleCallback = async () => {
    try {
      const response = await axios.get('https://cyberartboard.zeroinfo.in/callback/google');
      console.log('User data:', response.data.user);
      // Handle further logic after receiving user data from backend
    } catch (error) {
      console.error('Error fetching user data from Google:', error);
    }
  };

  return (
    <div className='google-btn'>
      <button className='btn btn-outline-danger' onClick={handleLogin}>Signin with Google</button>
      {/* Redirect user to Google login */}
        {redirectUrl && <a href={redirectUrl} className='redirect-text'>Continue with Google</a>}
      {/* Handle callback after Google authentication */}
      {window.location.search.includes('code') && handleCallback()}
    </div>
  );
};