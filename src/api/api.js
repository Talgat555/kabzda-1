import * as axios from "axios/index";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
            "API-KEY": "25918ef5-629a-49e7-adc2-673b7c4515a5"
        }
});


export const usersAPI = {
    getUsers(currentPage=1, pageSize=10) {
        return( instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
                .catch(error => {
                    console.log(error);
                })
        )
    },
    follow(userId) {
        return( instance.post(`follow/${userId}`))
    },
    unfollow(userId) {
        return( instance.delete(`follow/${userId}`))
    }
};

export const profileAPI = {
    getProfile(userId) {
        return( instance.get(`profile/`+ userId));
    },
    getStatus(userId) {
        return( instance.get(`profile/status/`+ userId));
    },
    updateStatus(status) {
        return( instance.put(`profile/status`, { status: status }));
    }
};