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
    getUsers(currentPage, pageSize) {
        return instance.get(`Users?page=${currentPage}&count=${pageSize}`)
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
        return instance.get(`profile/` + userId)
    }
        
}

export const authApi = {
    me () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }
}
// }

// export const followApi = {
//     post(id) {
//         return instance.post(`follow/${id}`)
//             .then(response => {
//                 return response.data
//             });


//     }
// }
// export const unfollowApi = {
//     delete(id) {
//         return instance.delete(`follow/${id}`)
//             .then(response => {
//                 return response.data
//             });
//     }
// }