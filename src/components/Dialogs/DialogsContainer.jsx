import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

import Dialogs from './Dialogs';






//test old version code (delete after)
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


//First way connect with Redirect
//let AuthRedirectComponent = withAuthRedirect(Dialogs);



let mapStateToProps = (state) => {
     return { 
        dialogsPage: state.dialogsPage,
        } 
        
    }
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
export default compose (
    withAuthRedirect,
    connect (mapStateToProps, mapDispatchToProps)
)(Dialogs);

