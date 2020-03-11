import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const PRODUCTION = process.env.NODE_ENV === 'production';

const reduxLogger = store => next => action => {
    console.log('Action:', action.type);
    next(action);
};

const thunkMiddleware = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};

const middlewares = applyMiddleware(thunkMiddleware, reduxLogger);

const enhancer = PRODUCTION ? compose(middlewares) : composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
