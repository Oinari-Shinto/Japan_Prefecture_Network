import { userApi } from "../api/api";
import { updateObjectInArray } from "../components/utils/object-helper";



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [ ],
    pageSize: 10,
    totalUserCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: []
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {

            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}  )
                //  users: state.users.map(  u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                //     })
                }
        }
        case UNFOLLOW: {

            return {
                ...state,
                 users: updateObjectInArray(state.users, action.userId, "id", {followed: false}  )
                }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
            
        case SET_CURRENT_PAGE: {
            return {...state, page: action.page}
        }

        case SET_USER_TOTAL_COUNT: {
            return {...state, totalUserCount: action.count}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state,
                 followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter( id => id !== action.userId)
                }
        }
            
        default:
            return state; 
    }

}
export const followSuccess = (userId) => ({type :  FOLLOW, userId})    
export const unfollowSuccess = (userId) => ({type :   UNFOLLOW, userId})    
export const setUsers = (users) => ({type :  SET_USERS, users}) 
export const setCurrentPage = (page) => ({type :  SET_CURRENT_PAGE, page})    
export const setTotalUserCount = (totalUserCount) => ({type :  SET_USER_TOTAL_COUNT,  count : totalUserCount})    
export const toggleIsFetching = (isFetching) => ({type :  TOGGLE_IS_FETCHING,  isFetching })    
export const toggleFollowingProgress = (isFetching, userId) => ({type :  TOGGLE_IS_FOLLOWING_PROGRESS,  isFetching, userId })    


export const requestUsers = (page, pageSize) => {

 return async (dispatch) => {
    dispatch(toggleIsFetching(true));

        let data = await userApi.requestUsers(page, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
            dispatch(setCurrentPage(page));
    }  
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
        
        let data = await apiMethod(userId);
        
            if (data.resultCode === 0) {
                dispatch(actionCreator(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
           
}


export const follow = (userId) => {
    
    return async (dispatch) => {
        // let apiMethod = userApi.follow.bind(userId);
        // let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, userApi.follow.bind(userId), followSuccess);

        
   }
}
export const unfollow = (userId) => {

    return async (dispatch) => {
        
        followUnfollowFlow(dispatch, userId, userApi.unfollow.bind(userId), unfollowSuccess);


        
   }
}



export default usersReducer;