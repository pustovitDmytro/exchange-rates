import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {getRates} from './actions/load.api';
import init from './actions/init';
import Router from 'universal-router';

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
const route = {
    path: '/',
    async action() {
        await await Promise
            .all([
                store.dispatch(getRates("USD")),
                store.dispatch(init(100,"USD"))
            ]);
        return <Provider store={store}>
            <App store={store}/>
        </Provider>;
    }
};
const router = new Router(route);
router.resolve({ path: '/' })
    .then(component=>render(component, document.getElementById('root')));
