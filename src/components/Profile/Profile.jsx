import React from 'react';

import s from'./Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Dialogs from '../Dialogs/Dialogs';
import Friend from '../SideBar/Friend/Friend';
import MyPostContainer from './MyPost/MyPostContainer';





const Profile = (props) => {

  
  
  return (
  <div>
   <ProfileInfo />
   <MyPostContainer  />
  </div>


  )
}
  
export default Profile;

    

  
  
  
