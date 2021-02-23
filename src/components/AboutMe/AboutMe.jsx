import React from 'react';
import classes from './AboutMe.module.css';
const aboutMe = () => {
  return (
    <section className={classes.AboutMe}>
      <h2>Hi, I&#8242;m Ronchi Floyd and this is my story.</h2>
      <p>
        I earned my bachelors degree in Information Technology{' '}
        <span>Specialized in Enterprise Networking</span> from the University of
        the Immaculate Conception last March 2019. I&#8242;m currenty working as
        an IT Technician but recently I discovered that I have a passion in Web
        Development.
      </p>
    </section>
  );
};

export default aboutMe;
