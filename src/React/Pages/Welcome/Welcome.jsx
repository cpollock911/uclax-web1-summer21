import React from 'react';
import styled from 'styled-components';

import Video from './Video/Video.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <h1>Welcome!</h1>
            <Slideshow />
            <Video />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    text-align: center;
    color: white;
`;