import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { renderField, validate, warn } from './form-validation';
import { store } from "../index";
import { storeUser } from "../actions";


import '../styles/registration.css';

export const login = (values, props) => {
    fetch('/api/login/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(values)})
        .then(response => response.json())
        .then(result => {
            console.log(result);
            store.dispatch(storeUser(result));
            (props !== undefined) && props.history.push('/firstPage');
        })
};

class Login extends Component {
    submit = (values) => {
        login(values, this.props);
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

Login = withRouter(Login);

export default Login;