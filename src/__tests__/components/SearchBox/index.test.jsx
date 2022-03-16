import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getLocationByIp } from '../../../actions/tracker';
import SearchBox from '../../../components/SearchBox';

jest.mock('../../../actions/tracker');

const initialState = {};
const mockStore = createMockStore([thunk]);

describe('SearchBox test', () => {
  const store = mockStore(initialState);
  store.dispatch = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <SearchBox />
    </Provider>,
  );

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input')).toBeTruthy();
    expect(wrapper.find('button').prop('type')).toBe('submit');
    expect(wrapper.find('img').prop('src')).toContain('icon-arrow');
  });

  test('should submit when click the button', () => {
    const evt = {
      target: { value: '12.12.12.12' },
      preventDefault: () => {},
    };
    jest.spyOn(evt, 'preventDefault');

    wrapper.find('input').simulate('change', evt);
    wrapper.find('button').simulate('submit', evt);
    expect(evt.preventDefault).toBeCalled();
    expect(getLocationByIp).toHaveBeenCalledWith(evt.target.value);
  });
});
