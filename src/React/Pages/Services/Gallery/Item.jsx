import React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx';

import { servicesData } from '../servicesData';

const Item = ({service}) => {

    const { media } = useMediaQuery();

    const LightboxContent = () => {
        return (
            <div>
                <img src={ service.image } alt={ service.title } />
                    <p id="h4">
                        <p>{ service.title }</p>
                        <p>{ service.cost }</p>
                        <p>{ service.description }</p>
                    </p>
            </div>
        );
    }

    const width = (media.mdUp) ? '400px' : '200px';

    return (
        <ItemStyled className='Item'>
            <Lightbox LightboxContent={ LightboxContent } width={ width }>
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
        border: 1px solid black;
    }
    h3 {
        background-color: #69c2ea;
        color: white;
        padding: 5px;
        font-size: 18px;
        margin: 0px;
        text-align: center;
        border: 1px solid black;
    }
    .h4 {
        background-color: #69c2ea;
        color: white;
        padding: 5px;
        font-size: 18px;
        margin: 0px;
        text-align: center;
        border: 1px solid black;
    }
    p {
        background-color: #69c2ea;
        color: white;
        padding: 5px;
        font-size: 18px;
        margin: 0px;
        text-align: center;
    }
`;