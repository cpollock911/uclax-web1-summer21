import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Item from './Item.jsx';

const Gallery = ({ services, curCat }) => {

    return (
        <GalleryStyled className='Gallery'>
            {
                services
                    .filter((service) => {
                        return (curCat === 'All' || service.category === curCat);
                })
                    .map((service, idx) => {
                        return <Item key={ idx } service={ service } />
                })
            }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    margin: 50px 100px;

    display: grid;

    grid-gap: 20px;

    grid-template-columns: repeat(3, 1fr);

    @media ${mediaQueries.lgUp} {
        grid-template-columns: repeat(3, 1fr);
    }

`;