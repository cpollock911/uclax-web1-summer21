import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>
            <a href="/">Welcome</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
            <a href="/homework">Homework</a>
        </NavStyled>
    )
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #ece7fa;
    padding: 10px;
    text-align: center;

    a {
        display: inline-block;
        background-color: #d6c7fa;
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin: 0px 10px;

        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            color:#d6c7fa;
            background-color: white;
        }

    }
`;