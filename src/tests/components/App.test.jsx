import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';

import App from '../../components/App';

describe('App', () => {
  it('renders without crashing', () => {
    mount(<BrowserRouter><App /></BrowserRouter>);
  });

  describe('render', () => {
    it('should render the App', () => {
      const app = shallow(<App />);

      expect(app.find('.app')).toHaveLength(1);
      expect(app.find('Header')).toHaveLength(1);
      expect(app.find('Main')).toHaveLength(1);
    });
  });
});
