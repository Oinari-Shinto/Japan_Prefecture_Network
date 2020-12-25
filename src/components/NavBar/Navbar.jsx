import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.topNav}>
      <div className={s.item}><NavLink to="/profile" >  Profile</NavLink></div>
      <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink></div>
      <div className={s.item}><a>Tokyo</a></div>
      <div className={s.item}><a>Kyoto</a></div>
      <div className={s.item}><a>Settings</a></div>

    </div>

  </nav>
}
export default Navbar;