import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import SearchBar from '../SearchBar';

import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

describe('SearchBar', () => {
  const testProps = {
    repos: [{}, {}, {}],
  };

  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      storeSearchTerm: () => jest.fn(),
    });

    component = renderer.create(
      <Provider store={store}>
        <SearchBar repos={testProps.repos} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
