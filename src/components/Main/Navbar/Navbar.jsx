import React from 'react'
import classes from './Navbar.module.css'
const navbar = () => {
    return (
      <header className={classes.Header}>
        <nav className={classes.Navbar}>
          <div>Logo</div>
          <ul>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
}
export default navbar;