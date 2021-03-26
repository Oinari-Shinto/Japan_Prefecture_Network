import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState (false);

  if (!profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  const onSubmit = (formData) => {
    saveProfile(formData);
 }

  return (
    <div>
      <img src="https://www.google.com/maps/vt/data=IH9pZyMwuGw8hfVnYE39s6HwL7dIe_cOUJDIeyP6rS2RecmDGBytjane1G-e5jsMd4ExXi16jTV0jKW1_n9BHe5toP-_pVmgrVL03qN41xYZkHYi_3TIBCGk8Fzsr01Jl9PxUKrTh7t4d8wG8DPZKuwEaQbWyhQb8Mlvopd8jfkmvsw1baanLR8mN8r0-5qWNmD7hELZAfl9b4Ah27K6YAgHQC1hkkh1U5lvrmOU6X88r4_yVaG-lgUzjmCG" alt="" />




      <div className={s.descriptionBlock}>
        <div>

          <div >
            <img src={profile.photos.large || userPhoto} className={s.UserAvatar} />
             #s Tokyo
            <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}</div>
          </div>

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>

        <a
          className={s.AppLink}
          href="https://en.wikipedia.org/wiki/Prefectures_of_Japan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prefectures of Japan
         </a>
          
          { editMode 
          ? <ProfileDataForm profile = {profile} onSubmit={onSubmit} />
          : <ProfileData profile = {profile}  goToEditMode = {() => {setEditMode(true)}} isOwner={isOwner}/>}
         

      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contactCSS}><b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileData = ({ profile, isOwner, goToEditMode, }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div> }
    <div><b>Name</b>: {profile.fullName}</div>
    <div><b>About prefecture</b>: {profile.aboutMe}</div>

    {profile.lookingForAJob &&
      <div><b>Professionals skills</b>: {profile.lookingForAJobDescription}</div>
    }
    <div><b>Avalible jobs</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
    <div><b>Contact</b>: {Object.keys(profile.contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> })}</div>
    <div><b>Status</b>: {}</div>
    
  </div>
}


export default ProfileInfo;