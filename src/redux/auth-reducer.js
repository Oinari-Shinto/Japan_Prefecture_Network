import { stopSubmit } from "redux-form";
import { authApi, securityApi } from "../api/api";


const SET_USER_DATA = 'japanese_prefecture/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'japanese_prefecture/auth/GET_CAPTCHA_URL_SUCCESS';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: 
        case GET_CAPTCHA_URL_SUCCESS:

            return {
                ...state,
                ...action.payload,
                
                 
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
export const getCaptchaUrlSuccess = (captchaUrl) => ({type :  GET_CAPTCHA_URL_SUCCESS, payload : {captchaUrl} })    

export const getAuthUserData = () => async  (dispatch) => { 

       let response = await authApi.me();
                
                if (response.data.resultCode === 0) { 
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, login, email,  true));
                }
            
   
}

export const login = (email, password, rememberMe, captcha) => async  (dispatch) => {
        let response = await authApi.login(email, password, rememberMe, captcha);
            
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
                else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl());
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    let action = stopSubmit('login', {_error: message});
                    dispatch(action);
                }
             
}
export const getCaptchaUrl = () => async  (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    
    dispatch(getCaptchaUrlSuccess(captchaUrl));

         
}
export const logout = () => async (dispatch) => {
    let response = await authApi.logout();
        
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
           
}


export default authReducer;