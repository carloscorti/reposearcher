import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../reducers';

import App from '../components/App';

const serverRender = () => {
  const store = createStore(reducers, {
    welcome: 'welcome to gitHub repository searcher',
  });

  const preloadedState = store.getState();

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
