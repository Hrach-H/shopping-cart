import React, { Component } from 'react';
import { Field, reduxForm, reset, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { store } from "../index";
import { renderField, validate, warn } from "./form-validation";
import { withRouter } from 'react-router-dom';
import Notifications from 'react-notification-system-redux';
import moment from 'moment';

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
const months = moment.monthsShort();
const convertMonthToNumber = month => {
    return months.join('').indexOf(month) / 3 + 1;
};

class Registration extends Component {
    submit = (values) => {
        let regBody = {...values};
        regBody.birthDate = `${regBody.year}-${convertMonthToNumber(regBody.month)}-${regBody.day}`;
        delete regBody.year;
        delete regBody.month;
        delete regBody.day;
        fetch('http://localhost:4000/api/users/', {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(regBody) })
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
            }).catch(err => console.log(err))
    };

    render() {
        // Calculation of available years & days (not outside render function, because needs chosen year & month for proper calculations
        const calculateYears = () => {
            const minAge = 18,
                startYear = (new Date()).getFullYear() - 100,
                endYear = (new Date()).getFullYear() - minAge;
            let output = [];
            for (let year = startYear; year <= endYear; year++) output.push(year);
            return output.reverse();
        };
        const calculateDays = () => {
            const days = moment(`${this.props.year}-${convertMonthToNumber(this.props.month)}`, 'YYYY-MM').daysInMonth();
            let output = [];
            for (let day = 1; day <= days; day++) output.push(day);
            return output;
        };

        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <Field name='firstName' component={renderField} type='text' label='First Name' placeholder='John'/>
                <Field name='lastName' component={renderField} type='text' label='Last Name' placeholder='Doe'/>
                <Field name='email' component={renderField} type='email' label='E-mail' placeholder='e.g. johndoe@email.com'/>
                <Field name='password' component={renderField} type='password' label='Password' placeholder='Must contain 5 characters minimum'/>
                <Field name='passConfirm' component={renderField} type='password' label='Password confirmation'/>
                <Field name='year' placeholder='YYYY' component={renderField} type='select' label='Date of birth' options={calculateYears()}/>
                <Field name='month' placeholder='MM' component={renderField} type='select' options={months}/>
                <Field name='day'  placeholder='DD' component={renderField} type='select' options={calculateDays()}/>
                <div className="buttons">
                    <button className='submit' type="submit" disabled={this.props.submitting}>Submit</button>
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

// Connecting form values for proper calculation of available 'Date of Birth' values
const selector = formValueSelector('registration');

Registration = connect(state => ({
    year: selector(state, 'year'),
    month: selector(state, 'month')
}))(Registration);

// ----------------------------------------------------------------------------------

Registration = withRouter(Registration);

export default Registration;