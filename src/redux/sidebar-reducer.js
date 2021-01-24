const ADD_FRIEND = 'ADD_FRIEND';



let initialState = {
    friends : [ 
        {id:1, name: 'Tokyo', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Tokyo_Metropolis.svg/120px-Flag_of_Tokyo_Metropolis.svg.png'></img>},
        {id:2, name: 'Chiba', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'></img>},
        {id:3, name: 'Kyoto', img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Kyoto_City.svg/100px-Flag_of_Kyoto_City.svg.png'></img>}
    ]   
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FRIEND: {  
            let stateCopy = {...state};
            stateCopy.friends = [...state.friends];

            return stateCopy;
        }
        default:
            return state; 
    };
    
}
export const addFriendCreator = () => ({type :  ADD_FRIEND})    


export  default sidebarReducer;