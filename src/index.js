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

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

async function read() {
    await Promise
        .all([
            store.dispatch(getRates("USD")),
            store.dispatch(init(100,"USD"))
        ]);
    render(<Provider store={store}>
        <App store={store}/>
    </Provider>, document.getElementById('root'));
}

read();

