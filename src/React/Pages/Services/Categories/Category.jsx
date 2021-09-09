import React from 'react';
import styled from 'styled-components';

const Category = ({cat, curCat, curCatUpdate}) => {

    const handleClick = () => {
        curCatUpdate(cat);
    }

    const className = (curCat === cat) ? 'Category chosen': 'Category';

    return (
        <CategoryStyled className={ className } onClick={ handleClick }>
            { cat } 
        </CategoryStyled>
    );
}

export default Category;

const CategoryStyled = styled.button`
    
    background-color: #8bdbf3;
    color: white;
    border: 1px solid black;
    border-radius: 5px 5px 5px 5px;
    padding: 10px 20px;
    margin: 0px 10px;
    font-weight: bold;

    cursor: pointer;

    &.chosen {
        background-color: #69c2ea;
    }
`;