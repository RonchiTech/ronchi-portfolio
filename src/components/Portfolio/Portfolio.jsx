import classes from './Portfolio.module.css';
import React from 'react'
import CardList from '../../UI/Cards/CardList'
const portfolio = () => {
    return (
      <section className={classes.Portfolio}>
        <h2>Portoflio</h2>
        <p>Since I do not have any working experience yet. I made these web apps to enhance and showcase my skills.</p>
        <CardList/>
      </section>
    );
}
export default portfolio