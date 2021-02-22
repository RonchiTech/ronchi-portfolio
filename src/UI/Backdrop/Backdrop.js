import React from 'react';
import MobileNav from '../../components/Main/Navbar/MobileNav/MobileNav';
import classes from './Backdrop.module.css';

const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}>
      <MobileNav />
    </div>
  ) : null;

export default backdrop;
