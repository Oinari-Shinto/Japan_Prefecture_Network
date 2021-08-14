import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
  
  return (
    

    <div className={s.item} >
      
      <div>{props.name}</div>
      <div>{props.img}</div>
        
      
      </div>
    
  )
  



    





  
}

export default Friend;
// {/* <div className={s.item}>
    // <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'/>

    // </div> */}