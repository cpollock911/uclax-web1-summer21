import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="nicoMakesCoffee">
            <img src="/img/Coffee/nicomakescoffee.png" alt="Logo"></img>
            </div>
        </HeaderStyled>
    )
}

export default Header;


const HeaderStyled = styled.div`
    background-color: #f4acbc;
    padding: 5px;
    text-align: center;
    color: white;
    font-size: 24px;

    img {
        width: 40%;
        height: auto;
    }
`;