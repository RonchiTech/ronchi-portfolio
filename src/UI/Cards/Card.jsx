import React from 'react';
import classes from './Card.module.css';
const card = ({ title, description, site, blog, github, label }) => {
  let style = { color: '#000' };
  if (!site) {
    style = {
      cursor: 'not-allowed',
      color: 'gray',
    };
  }
  return (
    <div className={classes.Card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        <li>
          <a href={blog} target="_blank" rel="noreferrer">
            Blog
          </a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
      </ul>
      <div>
        <a style={style} href={site} target="_blank" rel="noreferrer">
          {label || 'Check it'}
        </a>
      </div>
    </div>
  );
};
export default card;
