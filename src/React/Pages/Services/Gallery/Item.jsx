import React from 'react';
import styled from 'styled-components';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx';

import { servicesData } from '../servicesData';

const Item = ({service}) => {

    const LightboxContent = () => {
        return (
            <div>
                <img src={ service.image } alt={ service.title } />
                <h3>{ service.title }</h3>
                <h3>{ service.cost }</h3>
                <h3>{ service.description }</h3>
                
            </div>
        );
    }

    return (
        <ItemStyled className='Item'>
            <Lightbox LightboxContent={ LightboxContent }>
                <img src={ service.image } alt={ service.title } /> 
                <h3>{ service.title }</h3>
            </Lightbox>
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