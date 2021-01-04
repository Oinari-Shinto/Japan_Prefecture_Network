import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/State';
import s from './MyPost.module.css'
import Post from './Post/Post';



const MyPost = (props) => {
  
  let postsElement = props.posts.map (p => <Post message = {p.message} likeCount={p.likeCount} img={p.img}/>);

  let newPostElement = React.createRef();
  
  
  let addPost = () => {
    props.dispatch(addPostCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(text));

  }

  return (
    <div> <h3>My Post</h3>
    
    <div className={s.post}>
      <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
      
      <button onClick={ addPost }>Add post</button>
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