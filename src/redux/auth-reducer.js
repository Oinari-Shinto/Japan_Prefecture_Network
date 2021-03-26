import { stopSubmit } from "redux-form";
import { authApi } from "../api/api";


const SET_USER_DATA = 'japanese_prefecture/auth/SET_USER_DATA';

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
                ...action.payload,
                
                 
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
export const setAuthUserData = (userId, login, email, isAuth) => ({type :  SET_USER_DATA, payload : {userId, login, email, isAuth} })    

export const getAuthUserData = () => async  (dispatch) => { 

       let responce = await authApi.me();
                
                if (responce.data.resultCode === 0) { 
                    let {id, login, email} = responce.data.data;
                    dispatch(setAuthUserData(id, login, email,  true));
                }
            
   
}
export const login = (email, password, rememberMe) => async  (dispatch) => {
        let responce = await authApi.login(email, password, rememberMe);
            
                if (responce.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
                else {
                    let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error";
                    let action = stopSubmit('login', {_error: message});
                    dispatch(action);
                }
             
}
export const logout = () => async (dispatch) => {
    let responce = await authApi.logout();
        
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
           
}


export default authReducer;