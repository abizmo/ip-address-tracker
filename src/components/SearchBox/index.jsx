import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getLocation } from '../../actions/tracker';
import validateDomainName from '../../lib/validateDomainName';
import validateIPAddress from '../../lib/validateIPAddress';

const IMAGES_URL = `${process.env.PUBLIC_URL}/images`;

function SearchBox() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (validateIPAddress(search)) {
      dispatch(getLocation('ipAddress', search));
      setSearch('');
    } else if (validateDomainName(search)) {
      dispatch(getLocation('domain', search));
      setSearch('');
    } else {
      // eslint-disable-next-line no-console
      console.log('Dont track anything');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button type="submit"><img src={`${IMAGES_URL}/icon-arrow.svg`} alt="submit" /></button>
    </form>
  );
}

export default SearchBox;
