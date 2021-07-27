import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';
import { MediaQueryProvider } from 'common/mediaQueries/useMediaQuery.js';

const App = () => {
    return (
        <MediaQueryProvider>
            <BrowserRouter>
                <AppStyled>
                    <Header/>
                    <Nav/>
                    <Main/>
                    <Footer/>
                </AppStyled>
            </BrowserRouter>
        </MediaQueryProvider>
    );
}

export default App;

const AppStyled = styled.div`
    .inset-container {
        border: solid 2px #d6c7fa;
        max-width: 1200px;

        margin-right: auto;
        margin-left: auto;
    }

`;