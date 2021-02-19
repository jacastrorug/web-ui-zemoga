import React from 'react';

const Message = ({subtitle, title, text}) => {
  return (
    <section className="message">
      <div className="message_title">
        <p className="message_subtitle">Speak out. Be heard.</p>
        <p className="message_title_bold">Be counted</p>
      </div>
      <div className="message_text">
        <p>
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <div className="message_close">
        <i className="icon icon-close"></i>
      </div>
    </section>
  );
};

export default Message;
