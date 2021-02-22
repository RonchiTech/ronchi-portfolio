import React from 'react';
import MyPhoto from '../../assets/img/ako1.png';
import classes from './Main.module.css';
import Tagline from './Tagline/Tagline';
import Navbar from './Navbar/Navbar';
const main = () => {
  return (
    <main className={classes.Main}>
      <Navbar />
      <Tagline />
      <img className={classes.ImageContainer} src={MyPhoto} alt="Me" />
    </main>
  );
};
export default main;
