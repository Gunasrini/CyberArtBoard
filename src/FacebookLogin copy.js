import React from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

export default function FacebookLogin() {
    return (
        <div className='facebook-login'>
            <LoginSocialFacebook
                appId='1616161889122985'
                onResolve={(response) => {
                    console.log(response);
                }}
                onReject={(error) => {
                    console.log(error);
                }}>
                <FacebookLoginButton />
            </LoginSocialFacebook>
        </div>
    )
}
