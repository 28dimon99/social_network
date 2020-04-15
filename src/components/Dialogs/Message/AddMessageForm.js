import React from "react"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from"../../common/FormsControls/FormControls.module.css"

const maxLength50 = maxLengthCreator(50);
const AddNewMessage = (props) =>{
  return(
    <form className={s.formControl} onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             validate={[required, maxLength50 ]}
             name="newPostMessage"
             placeholder="ENTER YOUR MESSAGE"/>
      <div>
        <button>AddMessage</button>
      </div>
    </form>
  )
};

export const AddMessageForm = reduxForm({form:"dialogAddMessageForm"})(AddNewMessage)