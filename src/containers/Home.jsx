import React, { useContext } from 'react';

import ReducerContext from '../context/ReducerContextProvider';

import { Header, MainHome } from '../components';
const Home = () => {
  const { state } = useContext(ReducerContext);

  return (
    <>
      <Header />
      <MainHome sections={state.sections} />
    </>
  );
};

export default Home;
