import React from 'react';

export const validate = values => {
    const errors = {};

    // First & last name validation
    if (!values.firstName) {
        errors.firstName = 'This field is required';
    } else if (!/^[a-z ,.'-]+$/i.test(values.firstName)) {
        errors.firstName = "Please enter a valid name";
    }
    if (!values.lastName) {
        errors.lastName = 'This field is required';
    } else if (!/^[a-z ,.'-]+$/i.test(values.lastName)) {
        errors.lastName = "Please enter a valid name";
    }

    // E-mail validation
    if (!values.email) {
        errors.email = 'This field is required';
    } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+([.])[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Password validation
    if (!values.password) {
        errors.password = 'This field is required';
    } else if (values.password.length < 5) {
        errors.password = 'Password should contain 5 or more characters';
    }
    if (!values.passConfirm) {
        errors.passConfirm = 'This field is required';
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

export const renderField = ( {input, label, placeholder, type, meta: {touched, error} } ) => {
    return (
        <div>
            <label>
                {label}
            </label>
            <div>
                <input {...input} placeholder={placeholder} type={type} />
                {touched && ( (error && <span className='error'>{error}</span>)) }
            </div>
        </div>
    );
};