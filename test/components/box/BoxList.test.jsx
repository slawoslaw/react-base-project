import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import BoxList from '../../../src/components/box/BoxList';

const items = [
  {
    title: 'Some title',
    subtitle: 'Some subtitle',
    content: 'Some content'
  }
];

describe('BoxList', () => {
  it('renders without crashing', () => {
    mount(<BoxList items={items} />);
  });

  let boxList;

  describe('render', () => {
    beforeEach(() => {
      boxList = shallow(<BoxList items={items} />);
    });

    it('should render the BoxList', () => {
      expect(boxList.find('.box-list')).toHaveLength(1);
      expect(boxList.find('Box')).toHaveLength(1);
    });

    it('should render the Box in BoxList', () => {
      const title = <div className="title"><h1>Some title</h1></div>;
      const subtitle = <div className="subtitle"><h2>Some subtitle</h2></div>;
      const content = <div className="content">Some content</div>;

      expect(boxList.find('Box').shallow().contains(title)).toEqual(true);
      expect(boxList.find('Box').shallow().contains(subtitle)).toEqual(true);
      expect(boxList.find('Box').shallow().contains(content)).toEqual(true);
    });
  });
});
