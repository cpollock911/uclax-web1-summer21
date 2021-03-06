import React, { useState } from 'react';
import styled from 'styled-components';

import { servicesData } from './servicesData.js';

import Gallery from './Gallery/Gallery.jsx';
import Categories from './Categories/Categories.jsx';

const Container = () => {

    const { categories, services } = servicesData;

    const [curCat, curCatUpdate] = useState(categories[1]);

    console.log('curCat', curCat);

    return (
        <ContainerStyled className='Container'>
            <Categories 
                categories={ categories } 
                curCat={ curCat }
                curCatUpdate={ curCatUpdate }
                />
            <Gallery services={ services } curCat={ curCat }/>
        </ContainerStyled>
    );
}

export default Container;

const ContainerStyled = styled.div`
    padding: 25px;
`;