import React from 'react';
import styled from 'styled-components';

const Category = () => {

    return (
        <CategoryStyled className='Category'>
            Category 
        </CategoryStyled>
    );
}

export default Category;

const CategoryStyled = styled.div`
    
    background-color: #ece7fa;
    color: black;
    border: none;
    padding: 10px 20px;
    margin: 0px 10px;

    &.chosen {
        background-color: lavender;
    }
`;