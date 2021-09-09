import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../Context/index.js';
import { submitForm } from '../../Context/actions.js';

const SubmitButton = () => {

    const { dispatch, state } = useContext(Context);

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        submitForm(dispatch, state);
    }

    return (
        <SubmitButtonStyled 
            className='SubmitButton'
            type='Submit'   
            onClick={ handleClick }
        >
            Submit 
        </SubmitButtonStyled>
    );
}

export default SubmitButton;

const SubmitButtonStyled = styled.button`
    background-color: #69c2ea;
    color: black;
    border: 1px solid black;

    padding: 10px 20px;
    border-radius: 5px;

    &:hover, &:focus {
        background-color: #eee;
    }
    
`;