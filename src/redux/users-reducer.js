

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';



let initialState = {
    users: [ ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW: {

            return {
                ...state,
                 users: state.users.map(  u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                    })
                }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
            
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_USER_TOTAL_COUNT: {
            return {...state, totalUserCount: action.count}
        }
            
        default:
            return state; 
    }

}
export const followAC = (userId) => ({type :  TOGGLE_FOLLOW, userId})    
export const setUsersAC = (users) => ({type :  SET_USERS, users}) 
export const setCurrentPageAC = (currentPage) => ({type :  SET_CURRENT_PAGE, currentPage})    
export const setTotalUserCountAC = (totalUserCount) => ({type :  SET_USER_TOTAL_COUNT,  count : totalUserCount})    



export default usersReducer;