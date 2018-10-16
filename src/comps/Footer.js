import React from "react";

const Footer = props => {
  return (
    <div id="footer">
      <div id="footer-icons">
        <a href="mailto:ppatton35745@gmail.com">
          <img src="./img/email-webfont.svg" alt="email" />
        </a>
        <a href="https://github.com/ppatton35745">
          <img src="./img/github-webfont.svg" alt="email" />
        </a>
        <a href="https://www.linkedin.com/in/philippatton35745/">
          <img src="./img/linked-in-webfont.svg" alt="email" />
        </a>
      </div>
      <a className="webfonts" href="http://www.onlinewebfonts.com">
        oNline Web Fonts
      </a>
    </div>
  );
};

export default Footer;
