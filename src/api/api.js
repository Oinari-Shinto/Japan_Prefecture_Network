import axios from 'axios';
import React from 'react';


const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9a0ca8a4-c380-405e-9787-50b3b51fa517"
    }

});

export const userApi = {
    requestUsers(page, pageSize) {
        return instance.get(`Users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileApi object')
        return profileApi.getProfile(userId);
    }
        
}
export const profileApi = {
    getProfile(userId){
        return instance.get (`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get (`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put (`profile/status/`, {status: status});
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put (`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        });
    },
    saveProfile(profile) {
        return instance.put (`profile`, profile);
    }
        
}

export const authApi = {
    me () {
        return instance.get(`auth/me`);
        //if i want return and use only data in auth-reducer
            // .then(response => {
            //     return response.data
            // });
    },
    login (email, password, rememberMe = false, captcha=null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout () {
        return instance.delete(`auth/login`);                       
    },

}
export const securityApi = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`);
    },


}
