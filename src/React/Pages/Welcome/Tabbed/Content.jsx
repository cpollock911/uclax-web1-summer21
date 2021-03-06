import React from 'react';
import styled from 'styled-components';

const Content = ({chosenTab}) => {

    return (
        <ContentStyled className='Content'>
            <div className="image">
                <img src={ chosenTab.image } alt="{ chosenTab.image }" />
            </div>
            <div className="info">
                <h3>{ chosenTab.title }</h3>
                <div dangerouslySetInnerHTML={ { __html: chosenTab.text } } />
            </div>
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    padding: 20px;
    background-color: #69c2ea;
    min-height: 200px;
    border: none;
    color: white;

    display: flex;

    .image {
        flex: 1;
        img {
            max-width: 100%;
        }
    }

    .info {
        flex: 4;
        padding: 0px 20px;
    }

`;