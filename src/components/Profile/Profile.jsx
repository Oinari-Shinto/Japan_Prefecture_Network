import React from 'react';
import MyPost from './MyPost/MyPost';
import s from'./Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Dialogs from '../Dialogs/Dialogs';
import Friend from '../SideBar/Friend/Friend';





const Profile = (props) => {

  
  
  return (
  <div>
   <ProfileInfo />
   <MyPost posts={props.profilePage.posts}
           newPostText = {props.profilePage.newPostText}
           
           dispatch={props.dispatch}/>
   
  
  </div>


  )
}
  
export default Profile;

    

  
  
  
