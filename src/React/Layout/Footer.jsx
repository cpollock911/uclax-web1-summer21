import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>
           Spa Sanctuary &copy; 2021
        </FooterStyled>
    )
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #d6c7fa;
    padding: 10px;
    text-align: center;
`;