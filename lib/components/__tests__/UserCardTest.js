import React from 'react';
import UserCard from '../UserCard';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('UserCard', () => {
  const testProps = {
    user: {
      avatar_url: 'pic',
      login: 'userName',
      bio: 'userBio',
    },
  };

  const testPropsNullUser = {
    user: null,
  };

  it('renders correctly', () => {
    const wrapper = shallow(<UserCard user={testProps.user} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly case null repos', () => {
    const wrapper = shallow(<UserCard user={testPropsNullUser.user} />);

    expect(wrapper.find('h3').text()).toEqual('MVST');
  });
});
