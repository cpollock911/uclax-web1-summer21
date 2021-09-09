import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

import { mediaQueries } from 'common/mediaQueries/mediaQueries';

// Only loads the YouTube player

const Video = () => {

    return (
        <VideoStyled className='Video'>
            <div className='player-wrapper'>
                <div className='iframe-container'>
                    <h2>Making an Iced Pour Over</h2>
                    <ReactPlayer 
                        className='react-player'
                        url='https://youtu.be/JFd1U4b2eY0'
                />
                </div>
            </div>
        </VideoStyled>
    );
}

export default Video;

const VideoStyled = styled.div`

    .react-player {
        width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }
    .iframe-container{
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; 
        height: 0;
    }
    .iframe-container iframe{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }

`;