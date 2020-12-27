import React from 'react';
import NavLink from 'react-router-dom';
import s from './SideBar.module.css';


const SideBar = (props) => {
    return <nav className={s.nav}>
    <div className={s.topNav}>
      
      <div className={s.item}><a>Loading....</a></div>

    </div>

  </nav>


  
}

export default SideBar;
