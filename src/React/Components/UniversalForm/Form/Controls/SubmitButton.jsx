import React from 'react';
import styled from 'styled-components';

const SubmitButton = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
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
    background-color: #d6c7fa;
    color: black;

    padding: 10px 20px;
    border-radius: 5px;
    border: none;

    &:hover, &:focus {
        background-color: #eee;
    }
    
`;