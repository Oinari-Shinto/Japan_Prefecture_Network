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



  {/* <div className={s.item}>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'/>

    </div> */}

    
  


</post>
}
  
export default Post;