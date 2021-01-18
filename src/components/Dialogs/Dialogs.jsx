import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Navbar from '../NavBar/Navbar';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';





const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} />);
    let messagesElement = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    //let newCommentElement = React.createRef();

    let onSendMessageClick = () => {
         props.SendMessage();
    }
    let onSendMessageChange = (e) => {
       let newBody = e.target.value;
       props.updateNewMessageBody(newBody);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
                {/* <DialogItems name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItems name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItems name={dialogs[2].name} id={dialogs[2].id}/> */}

            </div>
            <div className={s.messages}>
               
                <div>{messagesElement}</div>
                
                <div>
                    <textarea placeholder="Enter your message" 
                              value={newMessageBody}
                              onChange={onSendMessageChange} 
                              ></textarea>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
                {/* <Message message = {messages[0].message}/>
                <Message message = {messages[1].message}/>
                <Message message = {messages[2].message}/> */}

            </div>
        </div>
    )
}

export default Dialogs;