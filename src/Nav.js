import React, { useState } from 'react';
import logo from './logo.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="App-nav">
      <img
        src={logo}
        className="Nav-logo"
        alt="logo"
      />
      <div
        className={isOpen ? 'hamburger open' : 'hamburger'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={isOpen ? 'nav-links open' : 'nav-links'}>
        <a
          href="https://www.youtube.com/sanjindumisic"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://www.linkedin.com/in/sanjindumisic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/codebatine"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Nav;
