import React from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={css.nav}>
      <div className={css.link}>
        <a href='#'>Profile</a>
      </div>
      <div className={css.link}>
        <a href='#'>Messages</a>
      </div>
      <div className={css.link}>
        <a href='#'>News</a>
      </div>
      <div className={css.link}>
        <a href='#'>Music</a>
      </div>
      <div className={css.link}>
        <a href='#'>Settings</a>
      </div>
    </nav>
    )
}

export default Navbar;