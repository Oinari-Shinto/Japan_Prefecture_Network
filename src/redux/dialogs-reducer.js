const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';




const dialogsReducer = (state, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            return state;
        case SEND_MESSAGE:
            let newBody =  state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 4, message: newBody});
            return state; 
        default:
            return state;
    } 
    
}
export const updateNewMessageBodyCreator = (newBody) => ({type : UPDATE_NEW_MESSAGE_BODY, newBody : newBody})
export const sendMessageCreator = () => ({type :  SEND_MESSAGE}) 

export  default dialogsReducer;