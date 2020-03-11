export const OPEN_NOTIFICATION = 'app/OPEN_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'app/CLOSE_NOTIFICATION';

const openNotificationAction = ({ duration, text }) => ({
    type: OPEN_NOTIFICATION,
    payload: { duration, text }
});

const closeNotificationAction = () => ({
    type: CLOSE_NOTIFICATION
});

let timer = null;

export const openNotification = ({ duration = 3000, text }) => (dispatch, getState) => {
    if (getState().app.notification.isOpen) {
        clearTimeout(timer);
        dispatch(closeNotificationAction());
    }

    setImmediate(() => dispatch(openNotificationAction({ duration, text })));

    timer = setTimeout(() => {
        dispatch(closeNotificationAction());
        clearTimeout(timer);
    }, duration);
};
