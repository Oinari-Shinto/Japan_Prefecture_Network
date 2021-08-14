import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return <post className={s.post}>


  <div className={s.item}>    
    {props.img}
    {props.message}
    <div>
    <span>like </span> {props.likeCount}
    
    </div>
  </div>


  


</post>
}
  
export default Post;