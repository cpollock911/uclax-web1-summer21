import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import LoginForm from './LoginForm/LoginForm.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <h1>Login Page</h1>
                <div className="col">
                        <LoginForm />
                </div>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;