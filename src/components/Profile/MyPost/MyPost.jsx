import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import s from './MyPost.module.css'
import Post from './Post/Post';



const MyPost = (props) => {
  
  let postsElement = props.posts.map (p => <Post message = {p.message} likeCount={p.likeCount} img={p.img}/>);

  let newPostElement = React.createRef();
  
  
  let OnnAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }

  return (
    <div> <h3>My Post</h3>
    
    <div className={s.post}>
      <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
      
      <button onClick={ OnnAddPost }>Add post</button>
      <button >Remove</button> 
    </div>
  
  
    <div className={s.post}> 
      {postsElement}
    {/* <Post message ="It's best Japanese guide Post Tokyo" likeCount='15'/>
    <Post message ='First publication release Post Chiba' likeCount='25'/> */}

    </div>
    </div> 
  )
} 
  
export default MyPost;