import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import NavbarRight from './components/NavBarRight/NavbarRight';
import Profile from './components/Profile/Profile';
import Preview from './components/Preview/Preview';
import MyPost from './components/Profile/MyPost/MyPost';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Navbar />
        <NavbarRight />
        <Preview />
        <Route path ='/MyPost' component={MyPost}/>
        <MyPost />
       <div className='App-content'>
          <Route path='/dialogs'> <Dialogs /></Route>
          <Route path='/profile'> <Profile /></Route>
          {/* <Dialogs /> */}
          {/* <News /> */}    
      </div> 
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
