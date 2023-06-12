import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };
  const onSearchInputChange = e => {
    setSearchQuery(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    const options = {
      q: searchQuery,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={searchQuery}
        name="search-box"
        id="search-box"
        onChange={onSearchInputChange}
      />{' '}
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          onChange={onRadioChange}
          checked={searchOption === 'shows'}
        />
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          onChange={onRadioChange}
          checked={searchOption === 'actors'}
        />
      </label>
      <button type="submit">search</button>
    </form>
  );
}
