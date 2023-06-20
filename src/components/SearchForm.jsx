import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CoustomRadio from './CoustomRadio';
import { styled } from 'styled-components';

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
      <SearchInput
        type="text"
        placeholder="search for  something"
        value={searchQuery}
        name="search-box"
        id="search-box"
        onChange={onSearchInputChange}
      />{' '}
      <RadiosWrapper>
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
      </RadiosWrapper>
      <SearchButtonWrapper>
        <button type="submit">search</button>
      </SearchButtonWrapper>
    </form>
  );
}

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
