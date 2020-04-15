/*
import React,{useState}from 'react'
//import s from './ProfileInfo.module.css'
import s from '../../common/FormsControls/FormControls.module.css'
import Customers from "../Customers/Customers";
import Prelouder from "../../common/Prelouder/Prelouder";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {updateStatus} from "../../../redux/profileReducer";


const ProfileInfo = React.memo(props => {

  //перерисовка виртуального дома
  console.log("RENDER YO");

  //вызывается тогда когда нужно ли отрисовать компоненту или нет
  //если следущие пропсы не равны тем которые пришли
  /!*  shouldComponentUpdate(nextProps, nextState){
       return nextProps != this.props || nextState != this.state;
    }*!/


  let state = props.profilePage;
  //let state = props.store.getState().profilePage;
  let postsElements =
    [...state.posts]
      .reverse()
      .map(p => <Customers message={p.message}/>);
  let newPostText = state.newPostText;


  /!*const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);
    if (!content) {
      return <Preloader/>
    }
    const onMainPhotoSelected =(e) =>{
      if(e.target.files.length){
        savePhoto(e.target.files[0]);
      }
    };

    const onSubmit =(formData) =>{
      saveProfile(formData).then(
        () => {
          setEditMode(false);
        }
      );


    };*!/
}
  return (

    <div className={s.profile}>
      <div className={s.photoAva}>
        <img src={profile.photos.large}/>

       /!* || userPhoto} className={s.mainPhoto}/>
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}*!/
     {/!* </div>
      {editMode
        ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
        : <ProfileData goToEditMode={() =>{setEditMode(true)}}
         isOwner ={isOwner} profile={profile}/>
      }
      <div>*!/}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>

      <div>
        <ProfileReduxForm onSubmit={addPost}/>
      </div>
      {postsElements}
    </div>
  );


/!*const ProfileData = ({profile, isOwner, goToEditMode})=>{
  return(
    <div className={s.contact}>
      {isOwner && <div onClick={goToEditMode}><button>edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Loking for a jod</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
    <div>
      <b>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>{
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })}
    </div>
  </div>
  )
};*!/

/!*
const Contact = ({contactTitle, contactValue}) => {
  return (
    <div>
        <b>{contactTitle}</b>:{contactValue}
    </div>
  )
};*!/


const maxLengthCreator10 = maxLengthCreator(10);
const ProfileForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.formControl}>
        <Field placeholder="Post message" name="newPostText" component={Textarea}
               validate={[required, maxLengthCreator10]}/>
      </div>
      <div>
        <button>Add doctor</button>
      </div>
    </form>
  )
};

const ProfileReduxForm = reduxForm({form: 'profileForm'})(ProfileForm);
  export default ProfileInfo;*/
