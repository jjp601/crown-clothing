import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './FormInput.styles';

const FormInput = ({ handleOnChange, label, ...props}) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleOnChange} {...props} />
            {label ? (
            <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabel>
            ) : null}
        </GroupContainer>
    );
};

export default FormInput;