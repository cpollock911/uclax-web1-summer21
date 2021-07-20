import React, { useState } from 'react';
import styled from 'styled-components' ;

const SunAndMoon = () => {

    const [imageState, imageStateUpdate] = useState('/img/sun.png');

    const handleOnMouseOut = () => {
        console.log('Mousing out');
        imageStateUpdate('/img/moon.png');
    }
    const handleOnMouseOver = () => {
        console.log('Mousing over');
        imageStateUpdate('/img/sun.png');

    }

    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <img 
                src={ imageState }
                alt='Sun' 
                onMouseOver={ handleOnMouseOver }
                onMouseOut={ handleOnMouseOut }
            />
        </SunAndMoonStyled>
    )
}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    background-color: #ece7fa;

    text-align: center;
    padding-bottom: 50px;

    h2 {
        background-color: #ece7fa;
        color: black;
    }

`;