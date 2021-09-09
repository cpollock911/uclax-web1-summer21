import React from 'react';
import styled from 'styled-components';

import Container from './Container.jsx';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <h1>Check out our options!</h1>
            <Container />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
    h1 {
        text-align: center;
        color: white;
    }

`;