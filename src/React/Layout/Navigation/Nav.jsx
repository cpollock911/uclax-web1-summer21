import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------*/
import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';


const Nav = () => {
    return (
        <NavStyled>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/services">Explore</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
            <NavLink to="/login">About</NavLink>
        </NavStyled>
    )
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #f4acbc;
    padding: 10px;
    text-align: center;

    a {
        display: block;
        margin: 5px 0px;

        background-color: #8bdbf3;
        color: white;
        padding: 10px;
        border: 1px solid black;

        text-decoration: none;
        font-weight: bold;

        &:hover {
            color:#8bdbf3;
            background-color: white;
        }

        &.active { 
            background-color: #69c2ea;
        }
    }

    @media ${mediaQueries.mdUp} {
        a {
            display: inline-block;
            margin: 0px 10px;
            font-size: 16px;
            border-radius: 5px;
        }   
`;