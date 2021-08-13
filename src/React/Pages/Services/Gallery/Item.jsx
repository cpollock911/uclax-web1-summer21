import React from 'react';
import styled from 'styled-components';
import { servicesData } from '../servicesData';

const Item = ({service}) => {

    return (
        <ItemStyled className='Item'>
            <img src={ service.image } alt={ service.title } /> 
            <h3>{ service.title }</h3>
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    img {
        width: 100%;
        display: block;
    }
    h3 {
        background-color: #d6c7fa;
        color: white;
        padding: 5px;
        font-size: 18px;
        margin: 0px;
    }
`;