import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { TextArea } from '../common/FormsControls/FormsControls';
import Navbar from '../NavBar/Navbar';
import { maxLengthCreator, required } from '../utils/validators/validator';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const maxLength50 = maxLengthCreator(50);
const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} />);
    let messagesElement = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    //let newCommentElement = React.createRef();

    
   

    let addNewMessage = (value) => {
        
        props.SendMessage(value.newMessageBody);
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            

            </div>
            <div className={s.messages}>

                <div>{messagesElement}</div>

                <AddMessageFormRedux onSubmit = {addNewMessage} />
  
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field component = {TextArea} name = {"newMessageBody"} placeholder= {"Enter your message"}
            validate={[required, maxLength50 ]}/>
    
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux  = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;