import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import NavbarRight from './components/NavBarRight/NavbarRight';
import Profile from './components/Profile/Profile';
import Preview from './components/Preview/Preview';
import MyPost from './components/Profile/MyPost/MyPost';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="App">
        

        <Header />
        <Navbar />
        <NavbarRight />
        <Preview />
        <Route path ='/MyPost' component={MyPost}/>
        
       <div className='App-content'>
          <Route path='/dialogs'> <Dialogs dialogs={props.dialogs} messages={props.messages}  /></Route>
          <Route path='/profile'> <Profile posts= {props.posts}/></Route>
          {/* <Dialogs /> */}
          {/* <News /> */}    
      </div> 
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
