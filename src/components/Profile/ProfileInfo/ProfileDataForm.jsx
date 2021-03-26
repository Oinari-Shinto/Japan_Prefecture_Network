import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, TextArea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({ profile, handleSubmit }) => {
    return  <form onSubmit= {handleSubmit}>
    <div><button>save</button></div>
    
    <div><b>Name</b>: {createField ("Name Prefecture", "fullname", Input, [] )}</div>
    <div><b>About prefecture</b>: {createField ("About prefecture", "aboutMe", TextArea , [] )}</div>

    
    <div><b>Professionals skills</b>: {createField ("Professionals skills", "lookingForAJobDescription", TextArea , [] )}</div>
    
    <div><b>Available jobs</b>:  {createField ("", "lookingForAJob", Input , [], {type: "checkbox"} )}</div>
    {/* <div><b>Contact</b>: {Object.keys(profile.contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> })}</div>
    <div><b>Status</b>: {profile.status}</div> */}
  </form>
  }


const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile' // a unique name for this form
     })(ProfileDataForm);

export default ProfileDataFormReduxForm;
