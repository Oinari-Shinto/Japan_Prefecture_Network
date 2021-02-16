import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../utils/validators/validator';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
   return <div>
      
      <form onSubmit = {props.handleSubmit}>
         <div><Field placeholder={"Email"} name = {"email"} component = {Input} validate={required}/></div>
         <div><Field placeholder={"Password"}  name = {"password"} type={"password"}  component = {Input} validate={required}/></div>
         <div><Field type={"checkbox"}  name = {"rememberMe"} component = {Input} />remember me</div>
         { props.error && <div className={style.formSummaryError} > {props.error}</div>}
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