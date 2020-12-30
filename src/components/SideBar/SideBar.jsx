import React from 'react';
import NavLink from 'react-router-dom';
import Message from '../Dialogs/Message/Message';
import Friend from './Friend/Friend';
import s from './SideBar.module.css';


const SideBar = (props) => {

  let sideBarElement = props.state.friends.map ( f => <Friend name = {f.name} img={f.img}/>);
  return (

    <div className={s.sidebar}>
      <div> 
        <div className={s.header}><a >Loading...</a></div>
      
        {sideBarElement}


      </div>
    </div>
  )


  // <nav className={s.nav}>

  //     <div className={s.topNav}>

  //         <a>Loading....</a>
  //         <div className={s.item}>
  //             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokyo_Prefecture.svg/120px-Flag_of_Tokyo_Prefecture.svg.png' />
  //             {sideBarElement}
  //             <a>Genbu</a>
  //         </div>





  //     </div>

  // </nav>



}

export default SideBar;
