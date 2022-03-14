import { shallow } from 'enzyme';
import Details from '../../components/Details';

describe('Details test', () => {
  test('should render and match', () => {
    const wrapper = shallow(<Details />);
    const titles = wrapper.find('h2').children();

    expect(wrapper).toMatchSnapshot();
    expect(titles).toHaveLength(4);
    expect(titles.first().text()).toBe('IP Address');
  });
});
