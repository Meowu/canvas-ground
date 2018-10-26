import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a logo", () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('img').length).toBe(1)
})
