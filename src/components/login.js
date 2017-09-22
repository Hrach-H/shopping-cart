import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField, validate, warn } from './form-validation';


import '../styles/registration.css';


class Login extends Component {
    submit = (values) => {
        fetch('http://localhost:4000/api/login/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(values)})
            .then(response => response.json())
            .then(result => console.log(result));
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <label htmlFor='email'>E-mail</label>
                <Field name='email' component={renderField} type='email' label='E-mail' placeholder='e.g. johndoe@email.com'/>

                <label htmlFor='password'>Password</label>
                <Field name='password' component={renderField} type='password' label='Password' placeholder='Must contain 5 characters minimum'/>

                <div className="buttons">
                    <button className='submit' type="submit" disabled={this.props.submitting}>Submit</button>
                    <button type='button' disabled={this.props.pristine || this.props.submitting } onClick={this.props.reset}>Clear values</button>
                </div>
            </form>
        );
    }
}

Login = reduxForm({
    form: 'login',
    validate,
    warn
})(Login);

export default Login;