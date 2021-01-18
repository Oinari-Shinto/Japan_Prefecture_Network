import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state : {

        profilePage : {
            posts : [
                {id :1, message : "It's best Japanese guide Post Tokyo", likeCount : 15, img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokyo_Prefecture.svg/120px-Flag_of_Tokyo_Prefecture.svg.png'/>},
                {id :2, message : 'First publication release Post Chiba', likeCount : 25, img : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'></img>}
              ],
            newPostText : 'Samurai'
        },
    
        dialogsPage : {
            dialogs : [
                {id: 1, name: 'Genbu', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Emblem_of_Kawagoe%2C_Saitama.svg/100px-Emblem_of_Kawagoe%2C_Saitama.svg.png'/>},
                {id: 2, name: 'Tosiro', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%BE%BD%E7%94%9F%E5%B8%82%E5%B8%82%E7%AB%A0.svg/100px-%E5%9F%BC%E7%8E%89%E7%9C%8C%E7%BE%BD%E7%94%9F%E5%B8%82%E5%B8%82%E7%AB%A0.svg.png'/>},
                {id: 3, name: 'Shinjiru', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Emblem_of_Misato%2C_Saitama.svg/100px-Emblem_of_Misato%2C_Saitama.svg.png'/>},
                {id: 4, name: 'Kami-Sama'},
                {id: 5, name: 'Kuhulin'},
                {id: 6, name: 'Shinamori'},
            ],
            messages : [
                {id: 1, message: 'おはようございます'},
                {id: 2, message: 'You are the best'},
                {id: 3, message: 'Nice speed'}
            ],
            newMessageBody : ""
    
        },
        sidebar : {
            friends : [ 
                    {id:1, name: 'Tokyo', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokyo_Prefecture.svg/120px-Flag_of_Tokyo_Prefecture.svg.png'></img>},
                    {id:2, name: 'Chiba', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'></img>},
                    {id:3, name: 'Kyoto', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Kyoto_City.svg/100px-Flag_of_Kyoto_City.svg.png'></img>}
                ]     
        },
    },
    _callSubscriber () {
        console.log ('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    // _addPost () {
    
    //     let newPost = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0,
    //         img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_Misato%2C_Saitama.svg/100px-Flag_of_Misato%2C_Saitama.svg.png'/>
    
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // }, 
    // _updateNewPostText (newText) {
    
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    
    // _updateNewMessageBody (newBody) {
    
    //     this._state.dialogsPage.newMessageBody = newBody;
    //     this._callSubscriber(this._state);
    // },
    // _updateSendMessage () {
    //     //debugger;
    //     let newBody =  this._state.dialogsPage.newMessageBody;
    //     this._state.dialogsPage.newMessageBody = '';
    //     this._state.dialogsPage.messages.push({id: 4, message: newBody});
    //     this._callSubscriber(this._state);
    // },
    
    
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

        // switch (action.type) {
        //     case ADD_POST:
        //         this._addPost();
        //         break;
        //     case UPDATE_NEW_POST_TEXT:
        //         this._updateNewPostText(action.newText);
        //         break;    
        //     case UPDATE_NEW_MESSAGE_BODY:
        //         this._updateNewMessageBody(action.newBody);
        //         break;
        //     case SEND_MESSAGE:
        //         this._updateSendMessage(action.newBody);
        //         break; 
        //     default:
        //         break;
        // }
    }
    // dispatch (action) {
    //     if (action.type === ADD_POST) {
    //         let newPost = {
    //             id: 3,
    //             message: this._state.profilePage.newPostText,
    //             likeCount: 0,
    //             img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_Misato%2C_Saitama.svg/100px-Flag_of_Misato%2C_Saitama.svg.png'/>
        
    //         };
    //         this._state.profilePage.posts.push(newPost);
    //         this._state.profilePage.newPostText = '';
    //         this._callSubscriber(this._state);
    //     }
    //     else if (action.type === UPDATE_NEW_POST_TEXT) {
    //         this._state.profilePage.newPostText = action.newText;
    //         this._callSubscriber(this._state);
    //     }
    //     else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //         this._state.dialogsPage.newMessageBody = action.newBody;
    //         this._callSubscriber(this._state);
    //     }
    //     else if (action.type === SEND_MESSAGE) {
    //         let newBody =  this._state.dialogsPage.newMessageBody;
    //         this._state.dialogsPage.newMessageBody = "";
    //         this._state.dialogsPage.messages.push({id: 4, message: newBody});
    //         this._callSubscriber(this._state);
    //     }
    // }

};



export default store;

