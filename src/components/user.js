import React from 'react';
import { connect } from 'react-redux';

let UserProfile = (props) => {
  return props.user.isLoggedIn ? <p className='user-profile'>Hello, {props.user.firstName}! </p> : <p className='user-profile'> You're not logged in </p>
};

UserProfile = connect(state => ({user: state.userReducer}))(UserProfile);

export default UserProfile;