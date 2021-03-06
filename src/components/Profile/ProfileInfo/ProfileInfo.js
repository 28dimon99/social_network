import React, {useState} from 'react';
import Preloader from "../../common/Prelouder/Prelouder"
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks"
import userPhoto from "../../.././img/userPhoto.jpg"
import s from"../Profile.module.css"
import ProfileDataForm from "./ProfileDataForm"


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader/>
  }
  const onMainPhotoSelected =(e) =>{
    if(e.target.files.length){
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) =>{
      saveProfile(formData).then(() => {
         setEditMode(false)});

  };

  return (
    <div className={s.descriptionBlock}>
      <div>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode = {() =>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}


        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

const ProfileData =({profile, isOwner, goToEditMode}) =>{
  return  <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
    <div>
      <b>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    }
    <div>
      <b>About me</b>:{profile.AboutMe}
    </div>
    <div>
      <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
      return <Contact key={key} cotactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>
  </div>
};


const Contact = ({contactTitle, contactValue}) =>{
  return <div className={s.contact}><b>{contactTitle}</b>:<b>{contactValue}</b>:</div>
};

export default ProfileInfo;