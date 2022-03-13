import { mount, shallow } from 'enzyme';

import SearchBox from '../../../components/SearchBox';

describe('SearchBox test', () => {
  test('should render and match snapshot', () => {
    const wrapper = shallow(<SearchBox />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input')).toBeTruthy();
    expect(wrapper.find('button').prop('type')).toBe('submit');
    expect(wrapper.find('img').prop('src')).toContain('icon-arrow');
  });

  test('should submit when click the button', () => {
    const wrapper = mount(<SearchBox />);
    const evt = {
      target: { value: '12.12.12.12' },
      preventDefault: () => {},
    };
    const logSpy = jest.spyOn(console, 'log');
    jest.spyOn(evt, 'preventDefault');
    logSpy('[Submit]', evt.target.value);

    wrapper.find('input').simulate('change', evt);
    wrapper.find('button').simulate('submit', evt);
    expect(evt.preventDefault).toBeCalled();
    expect(logSpy).toBeCalledWith('[Submit]', evt.target.value);
  });
});
