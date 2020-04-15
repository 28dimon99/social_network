import React from "react"
import s from"../Profile.module.css"
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile, error})=>{
  return(
    <form onSubmit={handleSubmit}>
     <div><button>save</button></div>

      {error && <div className={s.formSummaryError}>
        {error}
      </div>}

        <div>
          <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
          <b>Loking for a jod</b>:
          {createField("","lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
          <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
          <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
          <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
          return <div key={key} className={s.contact}>
            <b>{key}:{createField(key, "contacts." + key, [], Textarea)}</b>
          </div>
        })}
        </div>
      </form>

  )
};
const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;