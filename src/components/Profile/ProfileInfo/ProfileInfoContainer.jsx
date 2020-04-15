import React from 'react'
import {addDoctorActionCreator /*updateNewPostTextDoctorActionCreator*/} from "../../../redux/profileReducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import ProfileInfoTest from "./ProfileInfoTest";


/*const ProfileInfoContainer = (props) => {

  let state = props.store.getState().profilePage;

  let addDoctor = () => {
    props.store.dispatch(addDoctorActionCreator());
  };

  let onPostChange = (newText) => {
    props.store.dispatch(updateNewPostTextDoctorActionCreator(newText))
  };

  return <ProfileInfo updateNewPostTextDoctor={onPostChange} addNewDoctor={addDoctor} profilePage={state} />

    };*/

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
   /* updateNewPostTextDoctor: (newText) => {
      dispatch(updateNewPostTextDoctorActionCreator(newText))
    },*/
    addNewDoctor: (newPostText) => {
      dispatch(addDoctorActionCreator(newPostText));
    }
  }
};

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoTest);


export default ProfileInfoContainer;
