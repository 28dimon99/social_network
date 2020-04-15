import React from "react"
import {NavLink} from "react-router-dom";
import s from "./SidebarName.css"



const SidebarName = (props) =>{

  let path = "/sidebar/1" + props.id;
  return(
    <div className={s.people +' '+ s.active}>
      <NavLink to={path}>{props.man}</NavLink>
    </div>
  )
};

export default SidebarName;