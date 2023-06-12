import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useEffect, useState } from 'react';

const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setShowError(null);
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        console.log(error);
        setShowError(error);
        setShowData(null);
      }
    }
    fetchData();
  }, [showId]);
  return { showData, showError };
};

export default function Show() {
  const { showId } = useParams();
  const { showData, showError } = useShowById(showId);

  if (showError) {
    return <div>We have an Error : {showError.message}</div>;
  }
  if (showData) {
    return <div>Got show Data : {showData.name}</div>;
  }
  return <div>Data is Loading</div>;
}
