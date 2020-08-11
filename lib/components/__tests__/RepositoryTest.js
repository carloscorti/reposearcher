import React from 'react';
import Repository from '../Repository';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Repository', () => {
  const testProps = {
    repo: {
      id: 1,
      data: {
        name: 'n1',
        description: 'd1',
        language: 'l1',
        updated_at: '2020-04-16T20:33:43Z',
        html_url: 'url1',
      },
    },
  };
  it('renders correctly', () => {
    const wrapper = shallow(
      <Repository key={testProps.repo.id} data={testProps.repo} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
