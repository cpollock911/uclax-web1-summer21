import React from 'react';
import styled from 'styled-components';

const Tab = ({tab, chosenTab, chosenTabUpdate}) => {

    const handleClick = () => {
        chosenTabUpdate(tab);
    }

    const theClassName = (tab.title === chosenTab.title) ? 'Tab chosen': 'Tab';

    return (
        <TabStyled className={ theClassName } onClick={ handleClick }>
            { tab.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`
    padding: 20px;

    width: fill;
    text-align: center;
    font-weight: bold;
    color: white;

    cursor: pointer;

    margin-right: 10px;
    border-radius: 5px 5px 0px 0px;
    
    background-color: #8bdbf3;

    &.chosen {
        background-color: #69c2ea;
    }
`;