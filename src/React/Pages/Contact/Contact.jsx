import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Info from './Info/Info.jsx';
import Map from './Map/Map.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Contact Page</h1>

            <div className="row">
                <div className="col">
                    <Info />
                </div>
                <div className="col">
                    <ContactForm />
                </div>
            </div>  

            <Map />

        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

    @media ${mediaQueries.mdUp} {
        .row {
            display: flex;
            .col {
                flex: 1;
            }
        }
    }

`;