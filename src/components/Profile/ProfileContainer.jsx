import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';







class ProfileContainer extends React.Component {
    componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId){
        userId = this.props.authorizedUserId;
        if(!userId) {
          this.props.history.push("/login");
        }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);

      // userApi.profileUsers(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      // .then((response) => {
          
      //       this.props.setUserProfile(response.data); 
              
      //   });
    }

    render() {
      return (
        <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
      )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

   
});
//First way connect with Redirect
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default compose(
  connect (mapStateToProps,{getUserProfile, getStatus, updateStatus}),
  withRouter,
  //withAuthRedirect
) (ProfileContainer);


