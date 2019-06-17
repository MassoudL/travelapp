import React from 'react'
import GoogleLogin from 'react-google-login';

const btn = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
            <GoogleLogin
              clientId="813002166479-dg70r1ao0obdgmnubipu1jcpg15e61mn.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
    )
}

const Login = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (            <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    )
}

export default Login
