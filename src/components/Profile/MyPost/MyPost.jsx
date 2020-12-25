import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import DataPost from './../Profile'

const MyPost = (props) => {
  let posts = [
    {id :1, message : 'It\'s best Japanese guide Post Tokyo', lileCount :'15'},
    {id :1, message : 'First publication release Post Chiba', lileCount :'25'}
  ]
 
  let postsElement = posts.map(p => <Post message = {p.message} likeCount={p.lileCount}/>)

  return (
    <div> <h3>My Post</h3>
    
    <div className={s.post}>
      <div><textarea></textarea></div>
      
      <button >Add post</button>
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