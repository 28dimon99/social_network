import React from "react"
import {NavLink} from "react-router-dom";
import s from "./../Users.module.css"

const DialogsItem = (props) =>{
  let path = "/users/" + props.id;
  return(
    <div className={s.dialogs +' '+ s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

export default DialogsItem;