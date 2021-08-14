import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.item}>
            <a className={s.dialog}>
            {props.img}
            </a>
    
            <a className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
            </a>


        </div>
    )


}


export default DialogItem;