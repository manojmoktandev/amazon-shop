import React from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Notification({type,title}) {
    return () => {
        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':
                NotificationManager.success('Success message', {title});
                break;
            case 'warning':
                NotificationManager.warning('Warning message', {title}, 3000);
                break;
            case 'error':
                NotificationManager.error('Error message', {title}, 5000, () => {
                    alert('callback');
                });
                break;
            default:
                NotificationManager.info('Info message',{title});
        }
    }
}

export default Notification;
