import React from 'react';
import { shallow } from 'enzyme';
import { LoggedListComponent } from './LoggedList';

describe('Component LoggedList', () => {
  it('should render without crashing', () => {
    const component = shallow(<LoggedListComponent />);
    expect(component).toBeTruthy();
  });
});
