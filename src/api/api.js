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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
            })
                .then(response => {
                    return response.data
                })
    }
}
