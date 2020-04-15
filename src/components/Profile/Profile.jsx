import React from 'react'
import s from './Profile.module.css'
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {

  return (
    <div className={s.profile}>
      <ProfileInfoContainer
                            savePhoto={props.savePhoto}
                            isOwner={props.isOwner}
                            profile={props.profile}
                            status={props.status}
                            updateStatus={props.updateStatus}
      />
      <MyPostsContainer/>

    </div>
  )
};

export default Profile;