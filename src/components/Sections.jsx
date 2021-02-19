import React from 'react';

import { Section } from '../components';

const Sections = ({ sections }) => {
  return (
    <>
      {sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </>
  );
};

export default Sections;
