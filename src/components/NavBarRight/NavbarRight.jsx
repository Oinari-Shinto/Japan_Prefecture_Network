import React from 'react';
import s from './NavbarRight.module.css'

const NavbarRight = () => {
    return <nav className={s.nav}>
      <div className={s.topNav}>
        <div className={s.item}><a>地図</a></div>
        <div className={s.item}><a>神社</a></div>
        <div className={s.item}><a>時間</a></div>
        <div className={s.item}><a>電話</a></div>
        <div className={s.item}><a>仕事</a></div>
      </div>


    </nav>
  }
export default NavbarRight;