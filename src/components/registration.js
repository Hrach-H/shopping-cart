import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { store } from "../index";
import { renderField, validate, warn } from "./form-validation";
import { withRouter } from 'react-router-dom';
import Notifications from 'react-notification-system-redux';

import '../styles/registration.css';


// let Registration = props => {
//     const submit = (values) => {
//         console.log(values);
//     };
//     const { handleSubmit } = props;
//
//     return (
//         <form onSubmit={handleSubmit(submit)}>
//             <ul>
//                 <li>
//                     <label htmlFor='firstName'>First Name</label>
//                     <Field name='firstName' component='input' type='text' />
//                 </li>
//                 <li>
//                     <label htmlFor='secondName'>Second Name</label>
//                     <Field name='secondName' component='input' type='text' />
//                 </li>
//                 <li>
//                     <label htmlFor='email'>E-mail address</label>
//                     <Field name='email' component='input' type='text' />
//                 </li>
//                 <li>
//                     <label htmlFor='pass'>Password</label>
//                     <Field name='pass' component='input' type='password' />
//                 </li>
//                 <li>
//                     <label htmlFor='passConfirm'>Password Confirmation</label>
//                     <Field name='passConfirm' component='input' type='password' />
//                 </li>
//             </ul>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

class Registration extends Component {
    submit = (values) => {
        fetch('http://localhost:4000/api/users/', {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(values) })
            .then(response => response.json())
            .then( result => {
                if (result.message) {
                    console.warn('INVALID REGISTRATION', result.message);
                } else {
                    const successOpts = {
                        title: 'Registration Successful',
                        message: 'You have been successfully registered. Thank you!',
                        position: 'tr',
                        autoDismiss: 3,
                        action: {
                            label: 'OK',
                        }
                    };
                    store.dispatch(Notifications.success(successOpts));
                    store.dispatch(reset('registration'));
                    this.props.history.push('/firstPage');
                }
            })
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <Field name='firstName' component={renderField} type='text' label='First Name' placeholder='John'/>
                <Field name='lastName' component={renderField} type='text' label='Last Name' placeholder='Doe'/>
                <Field name='email' component={renderField} type='email' label='E-mail' placeholder='e.g. johndoe@email.com'/>
                <Field name='password' component={renderField} type='password' label='Password' placeholder='Must contain 5 characters minimum'/>
                <Field name='passConfirm' component={renderField} type='password' label='Password confirmation'/>
                <div>
                    <button type="submit" disabled={this.props.submitting}>Submit</button>
                    <button type='button' disabled={this.props.pristine || this.props.submitting } onClick={this.props.reset}>Clear values</button>
                </div>
            </form>
        );
    }
}



Registration = reduxForm({
    form: 'registration',
    validate,
    warn
})(Registration);

Registration = withRouter(Registration);

export default Registration;