import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>
           Nico Makes Coffee &copy; 2021
        </FooterStyled>
    )
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #f4acbc;
    padding: 10px;
    text-align: center;
    color: white;
    font-weight: bold;
`;