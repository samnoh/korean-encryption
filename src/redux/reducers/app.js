import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from '../actions/app';

const initialState = {
    notification: {
        isOpen: false,
        duration: 0,
        text: ''
    }
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_NOTIFICATION:
            const { duration, text } = action.payload;
            return { ...state, notification: { isOpen: true, duration, text } };

        case CLOSE_NOTIFICATION:
            const { notification } = initialState;
            return { ...state, notification };

        default:
            return state;
    }
};

export default appReducer;
