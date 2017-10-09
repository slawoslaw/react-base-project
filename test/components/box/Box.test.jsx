import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import Box from '../../../src/components/box/Box';

describe('Box', () => {
  it('renders without crashing', () => {
    mount(<Box />);
  });

  describe('render', () => {
    it('should render the Box', () => {
      const box = shallow(<Box title={'Some title'} subtitle={'Some subtitle'} content={'Some content'} />);
      const title = <div className="title"><h1>Some title</h1></div>;
      const subtitle = <div className="subtitle"><h2>Some subtitle</h2></div>;
      const content = <div className="content">Some content</div>;

      expect(box.contains(title)).toEqual(true);
      expect(box.contains(subtitle)).toEqual(true);
      expect(box.contains(content)).toEqual(true);
    });
  });
});
