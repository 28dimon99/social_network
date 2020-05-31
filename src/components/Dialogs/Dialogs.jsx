import React from "react"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form"
import AddMessageForm from "./Message/AddMessageForm";




const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

  let addNewMessage = (values)=>{
    props.sendMessage(values.newMessageBody)
  };

  if(!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
        <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  )
};


export default Dialogs