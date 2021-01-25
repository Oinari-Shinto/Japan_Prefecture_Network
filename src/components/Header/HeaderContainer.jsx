import React from 'react';
import { connect } from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import Header from './Header';
import { setAuthUserData, toggleIsFetching } from '../../redux/auth-reducer';
import axios from 'axios';


class HeaderContainer extends React.Component {
    componentDidMount() {
        
        //this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
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

export default connect (mapStateToProps, { setAuthUserData, toggleIsFetching })(HeaderContainer);