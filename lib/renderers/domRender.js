import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';

import reducers from '../reducers';

import '../Style/style.css';

import App from '../components/App';

const preloadedState = window.initialData;

delete window.initialData;

const store = createStore(
  reducers,
  preloadedState,
  applyMiddleware(reduxThunk)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
