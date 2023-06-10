const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async (QueryString = '/') => {
  const response = await fetch(`${BASE_URL}${QueryString}`);
  const body = await response.json();

  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);
