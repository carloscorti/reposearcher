import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../reducers';

import App from '../components/App';

/**
 * Function serverRender: sets redux store instance,
 * sets preloadedState with initial Redux store state,
 *
 * @return {Object}
 * -initialMarkup: Rendered react-redux app as string to server render
 * -preloadedState: initial state from redux store
 */
const serverRender = () => {
  //Setting up redux store instance
  const store = createStore(reducers, {
    welcome: 'welcome to gitHub repository searcher',
  });

  // Grab the initial state from redux store
  const preloadedState = store.getState();

  // Send the rendered page with preloaded state
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    ),
    preloadedState,
  };
};

export default serverRender;
