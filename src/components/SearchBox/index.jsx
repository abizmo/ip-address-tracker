import { useState } from 'react';

const IMAGES_URL = `${process.env.PUBLIC_URL}/images`;

function SearchBox() {
  const [search, setSearch] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('[Submit]', search);
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
