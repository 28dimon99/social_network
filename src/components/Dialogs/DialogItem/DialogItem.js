import React from "react"
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"

const DialogsItem = (props) =>{
  let path = "/dialogs/1" + props.id;
  return(
    <div className={s.dialogs +' '+ s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

export default DialogsItem;