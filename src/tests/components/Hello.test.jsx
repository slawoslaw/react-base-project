import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import Hello from '../../components/Hello';

describe('Hello', () => {
  it('renders without crashing', () => {
    mount(<Hello/>);
  });

  describe('render', () => {
    it('should render the Hello', () => {
      const hello = shallow(<Hello name={'Jarek'}/>);
      const h1 = <h1>Hello Jarek</h1>;

      expect(hello.contains(h1)).toEqual(true);
    });
  });
});

