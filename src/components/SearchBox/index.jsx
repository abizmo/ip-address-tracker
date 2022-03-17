import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getLocationByDomain, getLocationByIp, getMyLocation } from '../../actions/tracker';
import iconArrow from '../../assets/images/icon-arrow.svg';
import validateDomainName from '../../lib/validateDomainName';
import validateIPAddress from '../../lib/validateIPAddress';
import { Form, Input, Submit } from './styles';

// const IMAGES_URL = `${process.env.PUBLIC_URL}/images`;

function SearchBox() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyLocation());
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (validateIPAddress(search)) {
      dispatch(getLocationByIp(search));
      setSearch('');
    } else if (validateDomainName(search)) {
      dispatch(getLocationByDomain(search));
      setSearch('');
    } else {
      // eslint-disable-next-line no-console
      console.log('Dont track anything');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="search"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <Submit>
        <img src={iconArrow} alt="submit" />
      </Submit>
    </Form>
  );
}

export default SearchBox;
