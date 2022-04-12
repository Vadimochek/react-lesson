import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
      <nav className={css.nav}>
        <div className={css.link}>
          <NavLink to='/profile' className={navData => navData.isActive ? css.current : css.link}>Profile</NavLink>
        </div>
        <div className={css.link}>
            <NavLink to='/dialogs' className={navData => navData.isActive ? css.current : css.link}>Messages</NavLink>
        </div>
        <div className={css.link}>
            <NavLink to='/news' className={navData => navData.isActive ? css.current : css.link}>News</NavLink>
        </div>
        <div className={css.link}>
            <NavLink to='/music' className={navData => navData.isActive ? css.current : css.link}>Music</NavLink>
        </div>
        <div className={css.link}>
            <NavLink to='/settings' className={navData => navData.isActive ? css.current : css.link}>Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navbar;