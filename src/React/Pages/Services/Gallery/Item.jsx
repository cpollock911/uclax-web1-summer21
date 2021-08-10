import React from 'react';
import styled from 'styled-components';

const Item = () => {

    return (
        <ItemStyled className='Item'>
            <img src='/img/Services/service-1.jpg' alt="Whatever" /> 
            <h3> The Title</h3>
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    img {
        width: 100%;
        display: block;
    }
`;