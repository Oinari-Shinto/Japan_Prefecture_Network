import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { addPostCreator } from '../../../redux/profile-reducer';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validator';
import s from './MyPost.module.css'
import Post from './Post/Post';




const maxLength10 = maxLengthCreator(10);



const MyPost = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} img={p.img} />);
  let newPostElement = React.createRef();
   

  let OnAddPost = (value) => {
    props.addPost(value.newPostText);
    
  };
  
  return (
    <div> <h3>My Post</h3>
      <MyPostReduxForm onSubmit={OnAddPost} ref={newPostElement}/>
      
      <div className={s.post}>
        {postsElement}
        {
        /* <Post message ="It's best Japanese guide Post Tokyo" likeCount='15'/>
        <Post message ='First publication release Post Chiba' likeCount='25'/> */
        }

      </div>
    </div>
  )
}



const MyPostForm = (props) => {

 
  return (
    
      <form className={s.post} onSubmit = {props.handleSubmit}>
        <div>
          <Field component= {Textarea} name = {"newPostText"}  placeholder={"Post message"}
              validate={[required, maxLength10 ]} />
          
        </div>

        <button >Add post</button>
        <button >Remove</button>
      </form>
    
  )
}
const MyPostReduxForm = reduxForm({
  form: 'myPost' // a unique name for this form
})(MyPostForm);
export default MyPost;