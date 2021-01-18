import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';







// const DialogsContainer = () => {



//     return (
//         <StoreContex.Consumer> 
//             { (store) => {
//                 let state = store.getState().dialogsPage;
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
                     
//                  }
//                  let updateNewMessageBody = (newBody) => {
//                     store.dispatch(updateNewMessageBodyCreator(newBody));
//                  }
    
//                 return <Dialogs updateNewMessageBody={updateNewMessageBody} SendMessage={onSendMessageClick} dialogsPage = {state} />
//             }
//             }
//         </StoreContex.Consumer>
//     )
// }
let mapStateToProps = (state) => { return { dialogsPage: state.dialogsPage } }
let mapDispatchToProps = (dispatch) => {
    return { 
        updateNewMessageBody: (newBody) => {
            dispatch(updateNewMessageBodyCreator(newBody));
        },
        SendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }

}


const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;