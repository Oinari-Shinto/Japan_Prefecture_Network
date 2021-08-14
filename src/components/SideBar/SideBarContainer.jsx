import React from 'react';
import { connect } from 'react-redux';


import SideBar from './SideBar';



// const SideBarContainer = () => 
// {

  
//   return <StoreContex.Consumer>
//       { (store) => {
//         let state = store.getState().sidebar;
//         return <SideBar state = {state} />
//       }
        
//       }        
    
//     </StoreContex.Consumer>

  



// }

let mapStateToProps = (state) => {
  return {
    state :  state.sidebar
  }
}

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;
