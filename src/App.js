import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import NavbarRight from './components/NavBarRight/NavbarRight';
import Preview from './components/Preview/Preview';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UserContainer from './components/Users/UserContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  
  return (
    
      <div className="App">
        

        <Header />
        <Navbar />
        
        <NavbarRight />
        <Preview />
        <div className='App-sidebar-content'>
            
           <Route render = { () => <SideBarContainer />} />
        </div>
        
       <div className='App-content'>
          <Route path='/users' render = { () => <UserContainer  />} /> 
          
          <Route path='/dialogs' render = { () => <DialogsContainer  />} /> 
          <Route path='/profile/:userId?'>  <ProfileContainer  /></Route>
          
          {/* <Dialogs /> */}
          {/* <News /> */}    
      </div> 
    </div>
    
    
    
  );
}

export default App;
