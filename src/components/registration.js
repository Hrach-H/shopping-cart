import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
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
        console.log(values);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <ul>
                    <li>
                        <label htmlFor='firstName'>First Name</label>
                        <Field name='firstName' component='input' type='text' />
                    </li>
                    <li>
                        <label htmlFor='lastName'>Second Name</label>
                        <Field name='lastName' component='input' type='text' />
                    </li>
                    <li>
                        <label htmlFor='email'>E-mail address</label>
                        <Field name='email' component='input' type='text' />
                    </li>
                    <li>
                        <label htmlFor='password'>Password</label>
                        <Field name='password' component='input' type='password' />
                    </li>
                    <li>
                        <label htmlFor='passConfirm'>Password Confirmation</label>
                        <Field name='passConfirm' component='input' type='password' />
                    </li>
                </ul>
                <button type="submit">Submit</button>
            </form>
        );
    }
}



Registration = reduxForm({
    form: 'registration'
})(Registration);

export default Registration;