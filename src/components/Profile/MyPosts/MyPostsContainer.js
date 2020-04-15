import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/es/connect/connect";

const mapStateToProps=(state)=>{
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    addPost: (newPostText)=>{
      dispatch(addPostActionCreator(newPostText));
    }
  }
};
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer