
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs : [
        {id: 1, name: 'Genbu', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Emblem_of_Kawagoe%2C_Saitama.svg/100px-Emblem_of_Kawagoe%2C_Saitama.svg.png'/>},
        {id: 2, name: 'Tosiro', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%BE%BD%E7%94%9F%E5%B8%82%E5%B8%82%E7%AB%A0.svg/100px-%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%BE%BD%E7%94%9F%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png'/>},
        {id: 3, name: 'Shinjiru', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Emblem_of_Misato%2C_Saitama.svg/100px-Emblem_of_Misato%2C_Saitama.svg.png'/>},
        {id: 4, name: 'Molot'},
        {id: 5, name: 'Kuhulin'},
        {id: 6, name: 'Shinamori'},
        {id: 7, name: 'Lebowski'},
    ],
    messages : [
        {id: 1, message: 'おはようございます'},
        {id: 2, message: 'You are the best'},
        {id: 3, message: 'Nice speed'}
    ],
    
}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        
        case SEND_MESSAGE: {
            let newBody =  action.newMessageBody;
            return {...state, 
                
                messages : [...state.messages, {id: 4, message: newBody}] 
            };

        }
        default:
            return state;
    } 
    
}
export const sendMessageCreator = (newMessageBody) => ({type :  SEND_MESSAGE , newMessageBody} ) 

export  default dialogsReducer;