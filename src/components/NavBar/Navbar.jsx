import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.topNav}>
      <div className={s.item}><NavLink to="/profile" >  Profile</NavLink></div>
      <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink></div>
      <div className={s.item}><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></div>
      <div className={s.item}><NavLink to="/tokyo" activeClassName={s.activeLink}>Tokyo</NavLink></div>
      <div className={s.item}><NavLink to="/kyoto" activeClassName={s.activeLink}>Kyoto</NavLink></div>
      <div className={s.item}><NavLink to="/setting" activeClassName={s.activeLink}>Setting</NavLink></div>

    </div>

  </nav>
}
export default Navbar;