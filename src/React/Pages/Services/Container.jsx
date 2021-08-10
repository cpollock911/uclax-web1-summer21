import React from 'react';
import styled from 'styled-components';

import Gallery from './Gallery/Gallery.jsx';
import Categories from './Categories/Categories.jsx';

const Container = () => {

    return (
        <ContainerStyled className='Container'>
            <Gallery />
            <Categories /> 
        </ContainerStyled>
    );
}

export default Container;

const ContainerStyled = styled.div`
    
`;