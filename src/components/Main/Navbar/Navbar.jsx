import React, { useState } from 'react';
import classes from './Navbar.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const openSideBar = () => {
    setSidebar(!sidebar);
  };
  const closeSidebar = () => {
    setSidebar(!sidebar);
  };
  if (sidebar) {
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = '15px';

    //     body {
    //   height: 100vh;
    //   overflow-y: hidden;
    //   padding-right: 15px; /* Avoid width reflow */
    // }
  } else {
    document.body.style.height = '0';
    document.body.style.overflowY = 'scroll';
    document.body.style.paddingRight = '0';
  }
  return (
    <header className={classes.Header}>
      <nav className={classes.Navbar}>
        <div className={classes.Logo}>Ronchi Floyd</div>
        <div
          className={
            sidebar
              ? `${classes.HamburgerIcon} ${classes.change}`
              : classes.HamburgerIcon
          }
          onClick={openSideBar}
        >
          <div className={classes.bar1}></div>
          <div className={classes.bar2}></div>
          <div className={classes.bar3}></div>
        </div>
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Backdrop show={sidebar} clicked={closeSidebar} />
    </header>
  );
};
export default Navbar;
