import React from 'react';
import RepositoryList from '../RepositoryList';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('RepositoryList', () => {
  const testProps = {
    filteredRepos: [
      {
        id: 1,
        data: {
          name: 'n1',
          description: 'd1',
          language: 'l1',
          updated_at: 'ud1',
          html_url: 'url1',
        },
      },
      {
        id: 2,
        data: {
          name: 'n2',
          description: 'd2',
          language: 'l2',
          updated_at: 'ud2',
          html_url: 'url2',
        },
      },
    ],
    search: 'testSearch',
    welcome: 'testWelcome',
    repos: [{}, {}, {}],
  };

  const testPropsNoMatch = {
    filteredRepos: [
      { id: 1, data: {} },
      { id: 2, data: {} },
      { id: 3, data: {} },
    ],
    search: 'testSearchNoMatch',
    welcome: 'testWelcomeNoMatch',
    repos: [{}, {}, {}],
  };

  const testPropsNullRepos = {
    filteredRepos: [
      { id: 1, data: {} },
      { id: 2, data: {} },
      { id: 3, data: {} },
    ],
    search: 'testSearchNullRepos',
    welcome: 'testWelcomeNullRepos',
    repos: null,
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <RepositoryList
        filteredRepos={testProps.filteredRepos}
        search={testProps.search}
        welcome={testProps.welcome}
        repos={testProps.repos}
      />
    );

    expect(wrapper.find('Repository').length).toBe(2);
    expect(wrapper.find('b').length).not.toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly filtered repos msg', () => {
    const wrapper = shallow(
      <RepositoryList
        filteredRepos={testPropsNoMatch.filteredRepos}
        search={testPropsNoMatch.search}
        welcome={testPropsNoMatch.welcome}
        repos={testPropsNoMatch.repos}
      />
    );
    expect(wrapper.find('b').length).toBe(0);
  });

  it('renders correctly case null repos', () => {
    const wrapper = shallow(
      <RepositoryList
        filteredRepos={testPropsNullRepos.filteredRepos}
        search={testPropsNullRepos.search}
        welcome={testPropsNullRepos.welcome}
        repos={testPropsNullRepos.repos}
      />
    );

    expect(wrapper.find('h3').text()).toEqual(testPropsNullRepos.welcome);
    expect(wrapper.find('Repository').length).toBe(0);
  });
});
