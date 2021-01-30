import { authApi } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true
                 
                }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state; 
    }

}
export const toggleIsFetching = (isFetching) => ({type :  TOGGLE_IS_FETCHING,  isFetching })  
export const setAuthUserData = (userId, login, email) => ({type :  SET_USER_DATA, data : {userId, login, email} })    

export const getAuthUserData = () => {

    return (dispatch) => {

        authApi.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email));
                }
            });
   }
}


export default authReducer;