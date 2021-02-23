import React from 'react';
import classes from './Card.module.css';
import GotoIcon from '../../assets/img/gotoicon.png'
const card = ({ title, description, site, blog, github, label, src }) => {
  let style = { color: '#000' };
  if (!site) {
    style = {
      cursor: 'not-allowed',
      color: 'gray',
    };
  }
  return (
    <div className={classes.Card}>
      <div style={{ marginTop: '25px' }}>
        {src && (
          <img
            src={src}
            alt={title}
            style={{ width: '35px', height: '35px' }}
          />
        )}
      </div>
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
          {label || 
          <div className={classes.GotoIcon}>
            <img src={GotoIcon} alt='Go To Site' />
            </div>}
        </a>
      </div>
    </div>
  );
};
export default card;
