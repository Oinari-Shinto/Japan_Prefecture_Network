import './App.css';

import Navbar from './components/NavBar/Navbar';
import NavbarRight from './components/NavBarRight/NavbarRight';
import Preview from './components/Preview/Preview';
import { BrowserRouter, HashRouter, Route, withRouter } from 'react-router-dom';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UserContainer from './components/Users/UserContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Component, Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
class App extends Component {
 
  componentDidMount() {
        
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }




    return (<div className="App">
        

        <HeaderContainer />
        <Navbar />
        
        <NavbarRight />
        <Preview />
        <div className='App-sidebar-content'>
            
           <Route render={() => <SideBarContainer />} />
        </div>
        
       <div className='App-content'>
          <Route path='/users' render={() => <UserContainer />} /> 
          <Route path='/login' render={() => <Login />} /> 
          <Suspense fallback = {<Preloader />}>
               <Route path='/dialogs' render={() => <DialogsContainer />} />
          </Suspense>
           

          <Route path='/profile/:userId?'>  <ProfileContainer /></Route>
          
          {
          /* <Dialogs /> */
        }
          {
          /* <News /> */
        }    
      </div> 
    </div>);
  }

}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
   withRouter,
   connect (mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return <HashRouter>
      <Provider store = {store}>
        <AppContainer />
      </Provider> 
    </HashRouter>
}

export default MainApp;

