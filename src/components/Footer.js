import React from 'react';
import youtubeIcon from '../img/youtube.png';
import linkedinIcon from '../img/linkedin.png';
import githubIcon from '../img/github.png';

function Footer() {
  return (
    <footer>
      <p>&copy; React Testing</p>
      <a
        href="https://www.youtube.com/sanjindumisic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={youtubeIcon}
          alt="YouTube"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sanjindumisic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://github.com/codebatine"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubIcon}
          alt="GitHub"
        />
      </a>
    </footer>
  );
}

export default Footer;
