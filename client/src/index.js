import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './routes';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/index'
import 'bootstrap';

import {createStore,applyMiddleware} from 'redux'
const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);
const store =createStoreWithMiddleware(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;
ReactDOM.render(<Root store={store}/>, document.getElementById('container'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
