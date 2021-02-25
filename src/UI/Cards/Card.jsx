import React from 'react';
import classes from './Card.module.css';
import GotoIcon from '../../assets/img/arrow.svg';
import GithubIcon from '../../assets/img/github-icon.svg';
import BlogIcon from '../../assets/img/blog.svg';
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
        <a href={blog} target="_blank" rel="noreferrer">
          <img
            src={BlogIcon}
            alt="Blog"
            style={{ marginTop: '12px', width: '30px', height: '30px' }}
          />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <img
            src={GithubIcon}
            alt="Github"
            style={{ marginTop: '12px', width: '30px', height: '30px' }}
          />
        </a>
      </ul>
      <a style={style} href={site} target="_blank" rel="noreferrer">
        <div>
          {label || (
            <div className={classes.GotoIcon}>
              <img src={GotoIcon} alt="Go To Site" />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};
export default card;
