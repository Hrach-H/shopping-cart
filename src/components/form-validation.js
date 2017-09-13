import React from 'react';

'use strtict'

export const validate = values => {
    const errors = {};

    // First & last name validation
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    // E-mail validation
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+([.])[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Password validation
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 5) {
        errors.password = 'Password should contain 5 or more characters';
    }
    if (!values.passConfirm) {
        errors.passConfirm = 'Required';
    } else if (values.passConfirm !== values.password) {
        errors.passConfirm = "Password confirmation doesn't match the password";
    }

    return errors;
};

export const warn = values => {
    const warnings = {};
    if (/^[0-9 ]+$/.test(values.firstName)) {
        warnings.firstName = 'Are you a robot of sorts?';
    }

    return warnings;
};

export const renderField = ( {input, label, placeholder, type, meta: {touched, error, warning} } ) => {
    return (
        <div>
            <label>
                {label}
            </label>
            <div>
                <input {...input} placeholder={placeholder} type={type} />
                {touched && ( (error && <span>{error}</span>) || (warning && <span>{warning}</span>)) }
            </div>
        </div>
    );
};