import { useState, useEffect } from 'react';

export const usePersistedState = (initialValue, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persistedValue = sessionStorage.getItem(sessionStorageKey);
    return persistedValue ? persistedValue : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, state);
  }, [state, sessionStorageKey]);
  return [state, setState];
};

export const useSearchStr = () => usePersistedState('', 'searchStr');
