import { mount } from 'enzyme';
import App from 'App';

describe('App test', () => {
  test('should have a h1 with "IP Address Tracker"', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('h1').text()).toBe('IP Address Tracker');
  });
});
