import React from 'react';
import { connect } from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import Header from './Header';
import {  getAuthUserData } from '../../redux/auth-reducer';



class HeaderContainer extends React.Component {
    componentDidMount() {
        
        this.props.getAuthUserData();
        // userApi.authUser()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             let {id, login, email} = data.data;
        //             this.props.setAuthUserData(id, login, email);
        //         }
        //     });
    }

    render() {
        return <> 
            { this.props.isFetching ? <Preloader /> : null }
            <Header {...this.props} />
        
        </>
        
        
            
            
        
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    //isFetching: state.usersPage.isFetching
});

export default connect (mapStateToProps, { getAuthUserData })(HeaderContainer);