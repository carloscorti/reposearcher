/**
 * Starting point for react application
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';

import reducers from '../reducers';

import '../Style/style.css';

import App from '../components/App';

// Grab initial state from a global variable injected into the server-generated HTML
const preloadedState = window.initialData;

// Allow the passed state to be garbage-collected
delete window.initialData;

//Redux store client side, preload state from server
const store = createStore(
  reducers,
  preloadedState,
  applyMiddleware(reduxThunk)
);

//.hydrate() for server side rendering the App with redux conected
ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
