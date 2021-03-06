import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
  posts: [
    {id: 1, message: "People 1!!!", likesCount: 12},
    {id: 2, message: "People 2!!!", likesCount: 11},
    {id: 3, message: "People 3!!!", likesCount: 10}

  ],

  profile: null,
  aboutMe: null,
  fullName: null,

  status: ''


};

const profileReducer = (state = initialState , action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };

      return{
        ...state,
        posts: [...state.posts,newPost],
        newPostText: ''
      }

    }
    case SET_STATUS:{
     return{
       ...state,
       status: action.status
     }
    }

    case SET_USER_PROFILE:{
      return {...state, profile: action.profile}
    }

    case DELETE_POST :
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
      };
    case SAVE_PHOTO_SUCCESS :
      return {
        ...state, profile:
          {...state.profile, photos: action.photos}
      };
    default:
      return state;
  }
};
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});//сокращенная запись ф-ц кот возв
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const setStatus = (status) =>({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});



//thunks для получения ajax запросов
export const getUserProfile = (id) => async(dispatch) =>{
  //сидит функция которая зарезолвила промис
  let response = await usersAPI.getProfile(id);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (id) => async(dispatch) =>{
  let response = await  profileAPI.getStatus(id);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async(dispatch) =>{
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  }
;

export const savePhoto = (file) => async(dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async(dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0){
  dispatch(getUserProfile(userId));
  }
  //Ошибка
  /*else{
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    return Promise.reject(response.data.message[0]);
  }*/
};

export default profileReducer;
