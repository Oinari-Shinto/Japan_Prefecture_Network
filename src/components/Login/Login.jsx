import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../utils/validators/validator';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
   return <div>
      
      <form onSubmit = {handleSubmit}>
         {createField("Email", "email", Input, [required] )}
         {/* <div><Field placeholder={"Email"} name = {"email"} component = {Input} validate={[required]}/></div> */}
         {createField("Password", "password", Input, [required], {type: "password"} )}
         {createField( null, "rememberMe", Input, null, {type: "checkbox"}, "Remember Me"  )}

        
         
         { error && <div className={style.formSummaryError} > {error}</div>}
         <div><button>Login</button></div>

      </form>

      </div>
}



const LoginReduxForm = reduxForm({
   form: 'login' // a unique name for this form
 })(LoginForm);

 
const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe);
   }

   if (props.isAuth === true) {
      return <Redirect to={'/profile'} />;
   }


   return <div>
      

      <h1>Login</h1>
      
      <LoginReduxForm onSubmit = {onSubmit}/>

      
      
      </div>
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);