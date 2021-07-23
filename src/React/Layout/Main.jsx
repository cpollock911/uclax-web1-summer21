import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Homework from '../Homework/Homework.jsx';

const Main = () => {
    return (
        <MainStyled>
            <h1>Main Content</h1>
           <Switch>
               <Route path='/services'>
                   Services
                </Route>
                <Route path='/contact'>
                   Contact
                </Route>
                <Route path='/login'>
                   Login
                </Route>
                <Route path='/homework'>
                   <Homework />
                </Route>
                <Route path='/'>
                   Welcome
                </Route>
           </Switch>
        </MainStyled>    
    ) 
}

export default Main;

const MainStyled = styled.main`
    background-color: #ece7fa;
    padding: 10px;
    text-align: center;
`;