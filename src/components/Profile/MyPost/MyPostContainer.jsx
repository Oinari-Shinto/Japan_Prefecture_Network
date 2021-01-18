import React from 'react';
import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';



// const MyPostContainer = () => {
//   //
  
  

//   return (
//     <StoreContex.Consumer> 
//       {
//       (store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostCreator());
//         };
//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostTextCreator(text));
//         }
//         return <MyPost updateNewPostText={onPostChange} addPost={addPost}  posts={state.profilePage.posts} newPostText = {state.profilePage.newPostText}/>      
//       }     
//       }
//     </StoreContex.Consumer>
//   )
// } 

let mapStateToProps = (state) => {
  return {
    posts:  state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }

}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost : () => {
      dispatch(addPostCreator());
    },
    updateNewPostText : (text) => {
      dispatch(updateNewPostTextCreator(text));
    }

  }

}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
  
export default MyPostContainer;