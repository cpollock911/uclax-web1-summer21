import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../Pages/Welcome/Welcome.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Login from '../Pages/Login/Login.jsx';
import Services from '../Pages/Services/Services.jsx';

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
                   <Contact />
                </Route>
                <Route path='/login'>
                   Login
                </Route>
                <Route path='/homework'>
                   <Homework />
                </Route>
                <Route path='/'>
                   <Welcome />
                </Route>
           </Switch>
        </MainStyled>    
    ) 
}

export default Main;

const MainStyled = styled.main`
    background-color: #ece7fa;
    padding: 10px;

   /* div {
       border: solid 2px #d6c7fa;
       padding: 20px;
    } */
`;