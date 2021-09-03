import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm.jsx';

const LoginForm = () => {

    const defaultFormData = {
        apiUrl: '/email/send',
        hasSubmitted: false,
        requests: {},
        responses: {},
        message: '',

        controls: [
            {
                id: 'username',
                label: 'Username',
                value: '',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
            {
                id: 'password',
                label: 'Password',
                value: '',
                type: 'password',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
        ]
    }

    return (
        <LoginFormStyled className='LoginForm'>
            <UniversalForm defaultFormData={ defaultFormData } />
        </LoginFormStyled>
    );
}

export default LoginForm;

const LoginFormStyled = styled.div`
    padding: 20px;
`;