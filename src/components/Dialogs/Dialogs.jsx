import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';





const Dialogs = (props) => {
    // let dialogs = [
    //     {id: 1, name: 'Genbu'},
    //     {id: 2, name: 'Tosiro'},
    //     {id: 3, name: 'Shinjiru'},
    //     {id: 4, name: 'Kami-Sama'},
    //     {id: 5, name: 'Kuhulin'}
    // ]
    // let messages = [
    //     {id: 1, message: 'おはようございます'},
    //     {id: 2, message: 'You are the best'},
    //     {id: 3, message: 'Nice speed'}
    // ]

    let dialogsElement = props.state.dialogs.map (d => <DialogItem name={d.name} id ={d.id}/>);
    let messagesElement = props.state.messages.map ( m => <Message message = {m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElement }
                {/* <DialogItems name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItems name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItems name={dialogs[2].name} id={dialogs[2].id}/> */}
                
            </div>
            <div className={s.messages}>
                { messagesElement }
                
                {/* <Message message = {messages[0].message}/>
                <Message message = {messages[1].message}/>
                <Message message = {messages[2].message}/> */}
                
            </div>
        </div>
    )
}

export default Dialogs;