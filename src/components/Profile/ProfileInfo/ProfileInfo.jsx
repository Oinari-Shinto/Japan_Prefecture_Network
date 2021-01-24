import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }


  return (
    <div>
      <div>
        <img src="https://www.google.com/maps/vt/data=IH9pZyMwuGw8hfVnYE39s6HwL7dIe_cOUJDIeyP6rS2RecmDGBytjane1G-e5jsMd4ExXi16jTV0jKW1_n9BHe5toP-_pVmgrVL03qN41xYZkHYi_3TIBCGk8Fzsr01Jl9PxUKrTh7t4d8wG8DPZKuwEaQbWyhQb8Mlvopd8jfkmvsw1baanLR8mN8r0-5qWNmD7hELZAfl9b4Ah27K6YAgHQC1hkkh1U5lvrmOU6X88r4_yVaG-lgUzjmCG" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        
        <img src={props.profile.photos.small}/>
        #s Tokyo</div>
      <a
        className={s.AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
    </a>


    </div>
  )
}

export default ProfileInfo;