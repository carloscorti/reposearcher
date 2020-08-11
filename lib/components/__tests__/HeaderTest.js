import React from 'react';
import Header from '../Header';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
