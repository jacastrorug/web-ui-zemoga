import React from 'react';
import { Link } from 'react-router-dom';

import { Hero } from '../components';

import '../styles/components/header.css';

const Header = () => {
  return (
    <header className="main_header">
      <div className="background_menu"></div>
      <div className="main_header_title">
        <h3>Rule of Thumb.</h3>
        <div className="main_header_main_nav">
          <nav className="main_header_nav">
            <ul className="main_header_nav_list">
              <li>
                <Link to="/past-trials">Past Trials</Link>
              </li>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>Log In/Sign Up</li>
              <li className="icon icon-search"></li>
            </ul>
          </nav>
        </div>
      </div>
      <Hero />
      <footer className="main_header_regresive_count">
        <div className="main_header_regresive_count_closing">
          <p>CLOSING IN</p>
        </div>
        <div className="main_header_regresive_count_days">
          <p>22 days</p>
        </div>
      </footer>
    </header>
  );
};

export default Header;
