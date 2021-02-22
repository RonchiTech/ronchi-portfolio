import React, { useState } from 'react';
import classes from './Navbar.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop'
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const openSideBar = () => {
    setSidebar(!sidebar);
  };
  const closeSidebar = () => {
      setSidebar(!sidebar);
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
      <Backdrop show={sidebar} clicked={closeSidebar}/>
    </header>
  );
};
export default Navbar;
