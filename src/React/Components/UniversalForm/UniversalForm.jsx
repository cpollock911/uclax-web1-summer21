import React, { useState } from 'react';
import styled from 'styled-components';

import Form from './Form/Form.jsx';
import FormGroup from './Form/FormGroup/FormGroup.jsx';

const UniversalForm = () => {

    const [inputName, inputNameUpdate] = useState('');

    const handleUpdate = (event) => {
        inputNameUpdate(event.target.value);
    }

    return (
        <UniversalFormStyled className='UniversalForm'>
            <Form>
                <FormGroup 
                    inputName={ inputName }
                    handleUpdate={ handleUpdate}
                />
            </Form>
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    
`;