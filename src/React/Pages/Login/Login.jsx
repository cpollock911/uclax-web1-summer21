import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Tabbed from '../Welcome/Tabbed/Tabbed.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <h1>About</h1>
            <Tabbed />
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;