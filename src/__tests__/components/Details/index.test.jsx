import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Details from '../../../components/Details';

const initialState = {
  tracker: {
    ip: '192.212.174.101',
    location: 'Brooklyn, NY 10001',
    timezone: '-05:00',
    isp: 'SpaceX Starlink',
  },
};

const mockStore = createMockStore([thunk]);

describe('Details test', () => {
  test('should render and match', () => {
    const store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
    const titles = wrapper.find('h2').children();

    expect(wrapper).toMatchSnapshot();
    expect(titles).toHaveLength(4);
    expect(titles.first().text()).toBe('IP Address');
  });
});
