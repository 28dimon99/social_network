import React from "react"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from"../../common/FormsControls/FormControls.module.css"

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) =>{
  return(
    <form className={s.formControl} onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             validate={[required, maxLength50 ]}
             name="newMessageBody"
             placeholder="ENTER YOUR MESSAGE"/>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};

export default reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)