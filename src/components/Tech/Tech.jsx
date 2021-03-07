import React from 'react';
import classes from './Tech.module.css';
import HTML from '../../assets/img/html5.svg';
import CSS from '../../assets/img/css3.svg';
import JS from '../../assets/img/logo-javascript.svg'
import ReactLogo from '../../assets/img/react-2.svg';
import ReduxLogo from '../../assets/img/redux.svg'
import SassLogo from '../../assets/img/sass.svg'
const tech = () => {
  return (
    <section className={classes.Tech}>
      <h2>Technologies I love using:</h2>
      <ul>
        <li>
          <img src={HTML} alt="HTML" />
        </li>
        <li>
          <img src={CSS} alt="CSS" />
        </li>
        <li>
          <img src={JS} alt="JS" />
        </li>
        <li>
          <img src={ReactLogo} alt="ReactLogo" />
        </li>
        <li>
          <img src={ReduxLogo} alt="ReduxLogo" />
        </li>
        <li>
          <img src={SassLogo} alt="SassLogo" />
        </li>
      </ul>
    </section>
  );
};
export default tech;
