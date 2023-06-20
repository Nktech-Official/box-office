import ShowCard from './ShowCard';
import { useEffect, useReducer } from 'react';

/**
 *
 * @param {Function} reducer - Reducer function to handle anction
 * @param {*} initialState - Intial State of the hook
 * @param {String} localStorageKey - key under which data is persisted in localStorage
 */

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};

/**
 * Assign the project to an employee.
 * @param {Number[]}  currentStared - current state of starred shows.
 * @param {Object} action - Type of action to perform.
 * @param {string} action.type - type of the action 'STAR' or 'UNSTAR'.
 * @param {Number} action.showId - The showId to perform action on .
 */
const starrtedShowReducer = (currentStared, action) => {
  const { type, showId } = action;
  switch (type) {
    case 'STAR':
      return currentStared.concat(showId);

    case 'UNSTAR':
      return currentStared.filter(item => item !== showId);
    default:
      return currentStared;
  }
};
export default function ShowGrid({ shows }) {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    starrtedShowReducer,
    [],
    'starredList'
  );
  // starrtedShowReducer([1,32,3],{type:'STAR',showId:234232})
  console.log(starredShows);

  /**
   *
   * @param {Number} showId
   */
  const starMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    isStarred
      ? dispatchStarred({ type: 'UNSTAR', showId: showId })
      : dispatchStarred({ type: 'STAR', showId: showId });
  };

  return (
    <div>
      {shows.map(data => {
        const show = data.show;
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : '/image-not-found.png'}
            summary={show.summary}
            onStarClick={starMeClick}
          />
        );
      })}
    </div>
  );
}
