let state = {

    profilePage : {
        posts : [
            {id :1, message : "It's best Japanese guide Post Tokyo", likeCount : 15, img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokyo_Prefecture.svg/120px-Flag_of_Tokyo_Prefecture.svg.png'/>},
            {id :1, message : 'First publication release Post Chiba', likeCount : 25, img : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'></img>}
          ]
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

    },

    sidebar : {
        friends : [ 
                {id:1, name: 'Tokyo', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokyo_Prefecture.svg/120px-Flag_of_Tokyo_Prefecture.svg.png'></img>},
                {id:2, name: 'Chiba', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'></img>},
                {id:3, name: 'Kyoto', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Kyoto_City.svg/100px-Flag_of_Kyoto_City.svg.png'></img>}
            ]     
    },

    
    
    
    }
    
    export default state;