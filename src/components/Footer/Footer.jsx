import React from 'react';
import classes from './Footer.module.css';
import Facebook from '../../assets/img/facebook-2.svg';
import LinkedIn from '../../assets/img/linkedin-icon-2.svg';
import Github from '../../assets/img/github-icon.svg';
const footer = () => {
  return (
    <footer className={classes.Footer}>
      <h2>Having fun while learning.</h2>
      <div className={classes.Socials}>
        <ul>
          <li>
            <a href="https://facebook.com/rmiongf" target="__blank">
              <img src={Facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ronchi-floyd-miong-8a9a02196/"
              target="__blank"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/RonchiTech">
              <img src={Github} alt="Github" />
            </a>
          </li>
        </ul>
      </div>
      <hr/>
      <h3>Developed by Ronchi Floyd</h3>
    </footer>
  );
};
export default footer;
