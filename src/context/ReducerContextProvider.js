import React, { useReducer, useEffect } from 'react';
import reducer from '../reducers';
import initialState from '../initialState';

const ReducerContext = React.createContext({});

export function ReducerContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
}

export default ReducerContext;
