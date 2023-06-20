import { useEffect, useReducer } from 'react';

/**
 *
 * @param {Function} reducer - Reducer function to handle anction
 * @param {*} initialState - Intial State of the hook
 * @param {String} localStorageKey - key under which data is persisted in localStorage
 * @returns {[Number[],Function]} Array with Initial State and Dispatch Function
 */

export const usePersistedReducer = (reducer, initialState, localStorageKey) => {
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
 * Reducer Function for Star Events .
 * @param {Number[]}  currentStared - current state of starred shows.
 * @param {Object} action - Type of action to perform.
 * @param {string} action.type - type of the action 'STAR' or 'UNSTAR'.
 * @param {Number} action.showId - The showId to perform action on .
 */
export const starrtedShowReducer = (currentStared, action) => {
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

export const useStarredShows = () => {
  return usePersistedReducer(starrtedShowReducer, [], 'starredShow');
};
