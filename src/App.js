import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import NavbarRight from './components/NavBarRight/NavbarRight';
import Profile from './components/Profile/Profile';
import Preview from './components/Preview/Preview';
import MyPost from './components/Profile/MyPost/MyPost';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Friend from './components/SideBar/Friend/Friend';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="App">
        

        <Header />
        <Navbar />
        
        <NavbarRight />
        <Preview />
        <div className='App-sidebar-content'>
           <SideBar state= {props.state.sidebar}  />
          
        </div>
        
       <div className='App-content'>
          
          <Route path='/dialogs' render = { () => <Dialogs store={props.store} />} /> 
          <Route path='/profile'> <Profile profilePage = {props.state.profilePage} dispatch={props.dispatch} /></Route>
          
          {/* <Dialogs /> */}
          {/* <News /> */}    
      </div> 
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
