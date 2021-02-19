import React from 'react';

import { Message, Sections } from '../components';

import '../styles/components/main-home.css';
const MainHome = ({ sections }) => {
  return (
    <main>
      <Message />
      <Sections sections={sections} />
    </main>
  );
};

export default MainHome;
