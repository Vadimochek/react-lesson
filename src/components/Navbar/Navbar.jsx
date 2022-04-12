import React from 'react';
import css from './Navbar.module.css';

const Navbar = (props) => {
  return (
      <nav className={css.nav}>
        <div className={css.link}>
          <a href='/profile'>Profile</a>
        </div>
        <div className={css.link}>
          <a href='/dialogs'>Messages</a>
        </div>
        <div className={css.link}>
          <a href='/news'>News</a>
        </div>
        <div className={css.link}>
          <a href='/music'>Music</a>
        </div>
        <div className={css.link}>
          <a href='/settings'>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;