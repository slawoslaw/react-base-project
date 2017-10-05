import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import App from '../../components/App';

describe('App', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  describe('render', () => {
    it('should render the App', () => {
      const app = shallow(<App />);

      expect(app.find('.app')).toHaveLength(1);
      expect(app.find('BoxList')).toHaveLength(1);
    });
  });
});
