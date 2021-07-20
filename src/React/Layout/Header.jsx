import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <h2>Spa Sanctuary</h2>
            <h3>A SPA For Every Occasion</h3>
        </HeaderStyled>
    )
}

export default Header;


const HeaderStyled = styled.header`
    background-color: #d6c7fa;
    padding: 20px;
    text-align: center;
`;