import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = e => {
    setSearchQuery(e.target.value);
  };
  const onSearch = async e => {
    e.preventDefault();

    try {
      setApiDataError(null);
      if (searchOption === 'shows') {
        const result = await searchForShows(searchQuery);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchQuery);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };
  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured : {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map((value, indx) => <div key={indx}>{value.show.name}</div>)
        : apiData.map((value, indx) => (
            <div key={indx}>{value.person.name}</div>
          ));
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
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
      {renderApiData()}
    </div>
  );
};

export default Home;
