import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, TextArea } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css'
import style from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
return <form onSubmit={handleSubmit}>
  <div><button>save</button></div>
  { error && <div className={style.formSummaryError} > {error}</div>}

  <div><b>Name</b>: {createField ("Name Prefecture", "fullName", Input, [] )}</div>
  <div><b>About prefecture</b>: {createField ("About prefecture", "aboutMe", TextArea , [] )}</div>


  <div><b>Professionals skills</b>: {createField ("Professionals skills", "lookingForAJobDescription", TextArea , [] )}
  </div>

  <div><b>Available jobs</b>: {createField ("", "lookingForAJob", Input , [], {type: "checkbox"} )}</div>

  <div><b>Contact</b>: {Object.keys(profile.contacts).map(key => {
    return <div key={key} className={s.contactCSS}>
      <b>{key}: </b> {createField (key, "contacts." + key, Input, [] )}
    </div>
    })}</div>

  <div><b>Status</b>: {profile.status}</div>
</form>
}


const ProfileDataFormReduxForm = reduxForm({
form: 'edit-profile' // a unique name for this form
})(ProfileDataForm);

export default ProfileDataFormReduxForm;