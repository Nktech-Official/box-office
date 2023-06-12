import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);

      let result =
        searchOption === 'shows'
          ? await searchForShows(q)
          : await searchForPeople(q);

      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
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
      <SearchForm onSearch={onSearch} />

      {renderApiData()}
    </div>
  );
};

export default Home;
