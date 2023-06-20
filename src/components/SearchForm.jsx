import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CoustomRadio from './CoustomRadio';

export default function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useSearchStr('');
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
      <CoustomRadio
        label="Shows"
        type="radio"
        name="search-option"
        value="shows"
        onChange={onRadioChange}
        checked={searchOption === 'shows'}
      />
      <CoustomRadio
        label="Actors"
        type="radio"
        name="search-option"
        value="actors"
        onChange={onRadioChange}
        checked={searchOption === 'actors'}
      />
      <button type="submit">search</button>
    </form>
  );
}
