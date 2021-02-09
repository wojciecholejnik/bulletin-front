import React from 'react';
import { shallow } from 'enzyme';
import { ProductTileComponent } from './ProductTile';

describe('Component ProductTile', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductTileComponent />);
    expect(component).toBeTruthy();
  });
});
