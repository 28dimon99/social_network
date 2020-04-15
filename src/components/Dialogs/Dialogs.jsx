import React from "react"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageForm} from "./Message/AddMessageForm";




const Dialogs = (props) => {

  let state = props.dialogPage;
  let dialogElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>)
  let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
  let newPostMessage = state.newPostMessage;

  let addMessageDialog = (values)=>{
    props.addMessage(values.newPostMessage)
  };

  return (
    <div className={s.dialogs}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYT_PrdiB-Or6WGKRpkEkGZQbqb6pEoS1f45W7PC17TmY8pCNcQ&s"/>
      </div>
      <div>
        <h3>Add message</h3>
      </div>
      <div>
       <AddMessageForm onSubmit={addMessageDialog}/>
      </div>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  )
};

export default Dialogs;