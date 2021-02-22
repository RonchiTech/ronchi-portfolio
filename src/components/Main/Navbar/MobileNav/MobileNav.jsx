import classes from './MobileNav.module.css';
import React from 'react';

const MobileNav = () => {
  return (
    <div className={classes.MobileNav}>
      <ul>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default MobileNav;
