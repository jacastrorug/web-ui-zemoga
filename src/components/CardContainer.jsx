import React from 'react';

const CardContainer = ({
  id,
  name,
  time_business,
  description,
  class_code,
  likesPercent,
  dislikesPercent,
  option,
  voted,
  handleLike,
  handleDisLike,
  handleVoteAgain,
  handleSubmit,
}) => {
  return (
    <article className={`participants_section_card ${class_code}`}>
      <div className="participants_section_card_content">
        <div className="participants_section_card_higuer">
          <div className="participants_section_card_higuer_icon">
            <i className="icon icon-like"></i>
          </div>
        </div>
        <h2 className="participants_section_card_title">{name}</h2>
        <div className="participants_section_card_principal_content">
          <h5>{time_business}</h5>
          <p className="participants_section_card_description">
            {voted ? 'Thank you for voting' : description}
          </p>
          {voted && (
            <div className="participants_section_card_votes_section">
              <button className="button_vote" onClick={handleVoteAgain}>
                Vote again
              </button>
            </div>
          )}
          {!voted && (
            <div className="participants_section_card_votes_section">
              <button
                className={`button_like ${option === 'like' ? 'selected' : ''}`}
                onClick={handleLike}
              >
                <i className="icon icon-like"></i>
              </button>
              <button
                className={`button_dislike ${
                  option === 'dislike' ? 'selected' : ''
                }`}
                onClick={handleDisLike}
              >
                <i className="icon icon-dislike"></i>
              </button>
              <button className="button_vote" onClick={handleSubmit}>
                Vote now
              </button>
            </div>
          )}
        </div>
      </div>
      <footer className="participants_section_card_status">
        <div className="participants_section_card_status_likes"  style={{width:`${likesPercent}%`}}>
          <div className="participants_section_card_status_icon">
            <i className="icon icon-like"></i>
          </div>
          <div className="participants_section_card_status_text">
            {likesPercent}%
          </div>
        </div>
        <div className="participants_section_card_status_dislikes"  style={{width:`${dislikesPercent}%`}}>
          <div className="participants_section_card_status_text">
            {dislikesPercent}%
          </div>
          <div className="participants_section_card_status_icon">
            <i className="icon icon-like"></i>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default CardContainer;
