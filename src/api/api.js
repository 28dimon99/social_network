
import * as axios from "axios/index";

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "396ecbce-f00b-437e-b97b-2aeed7b2ee2d"
  }
});

export const usersAPI ={
  getUsers(currentPage = 1, pageSize = 10){
    return instanse.get(`users/?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
    getProfile(userId){
        console.warn('Obsolete metod. Please profileAPI object');
        return profileAPI.getProfile(userId)
    },
  follow(userId){
    return instanse.post(`follow/${userId}`)
  },
  unfollow(userId){
    return instanse.delete(`follow/${userId}`)
  }

};

export const profileAPI ={
  getProfile(userId){
    return instanse.get(`profile/` + userId)
  },
  getStatus(status){
    return instanse.get(`profile/status/` + status)
  },
  updateStatus(status){
    return instanse.put(`profile/status`, {status: status})
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append("image", photoFile);
    return instanse.put(`profile/photo`,formData,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile){
    return instanse.put(`profile`, profile)
  }

};


export const authAPI ={
  me(){
   return  instanse.get(`auth/me`);
  },
  //Создаем запрос на логин, параметры передаем с документации
  login(email, password, rememberMe = false, captcha = null){
    return instanse.post(`/auth/login`, {email, password, rememberMe, captcha})
  },
  logout(){
    return instanse.delete(`/auth/login`);
  },
};

export const securityAPI ={
  getCaptchaUrl(){
    return  instanse.get(`security/get-captcha-url`)
  },

};

//Запрос todoList
export const todoListAPI = {
  getToDoListUrl(/*id, addedDate, order, title*/){
    return instanse.get(`todo-lists`/*+ id, addedDate, order, title */)
  }
};


