import React from 'react';

import { Card } from '../components';

const Section = ({ name, participants }) => {
  return (
    <section className="participants_section">
      <h5>{name}</h5>
      <section className="participants_section_content">
        {participants.map((participant) => (
          <Card key={participant.id} {...participant} />
        ))}
      </section>
    </section>
  );
};

export default Section;
