import React, { useState } from 'react';
import axios from 'axios';

export default function FacebookLogin() {
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://cyberartboard.zeroinfo.in/api/redirect/facebook');
      setRedirectUrl(response.data.redirectUrl);
    } catch (error) {
      console.error('Error initiating Facebook login:', error);
    }
  };

  const handleCallback = async () => {
    try {
      const response = await axios.get('https://cyberartboard.zeroinfo.in/callback/google');
      console.log('User data:', response.data.user);
      // Handle further logic after receiving user data from backend
    } catch (error) {
      console.error('Error fetching user data from Facebook:', error);
    }
  };

  return (
    <div className='facebook-btn'>
      <button className='btn btn-outline-primary' onClick={handleLogin}>Login with Facebook</button>
      {/* Redirect user to Facebook login */}
      {redirectUrl && <a href={redirectUrl} className='redirect-text'>Continue with Facebook</a>}
      {/* Handle callback after Facebook authentication */}
      {window.location.search.includes('code') && handleCallback()}
    </div>
  );
};