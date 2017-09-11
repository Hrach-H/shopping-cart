import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notifications from 'react-notification-system-redux';

class SnackNotifications extends Component {
    render() {
        const { notifications } = this.props;

        return (
            <Notifications notifications={notifications} />
        );
    }

}

SnackNotifications = connect(state => ({notifications: state.notifications}))(SnackNotifications);

export default SnackNotifications;