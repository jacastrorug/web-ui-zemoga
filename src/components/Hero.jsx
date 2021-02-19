import React from 'react';

const Hero = () => {
  return (
    <section className="main_header_hero_card">
      <article className="main_header_article_card">
        <h5 className="hero_card_subtitle">What's your opinion on</h5>
        <h2 className="hero_card_title">Pope Francis?</h2>
        <p className="hero_card_description">
          He’s talking tough on clergy sexual abuse, but is he just another
          papal pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumbs up)
        </p>
        <p className="hero_card_information">
          <a href="https://wikipedia.com">More information</a>
        </p>
        <p className="hero_card_veredict">What's your veredict?</p>
      </article>
      <footer className="main_header_footer_card">
        <div className="main_header_footer_card_like">
          <i className="icon icon-like"></i>
        </div>
        <div className="main_header_footer_card_dislike">
          <i className="icon icon-dislike"></i>
        </div>
      </footer>
    </section>
  );
};

export default Hero;
