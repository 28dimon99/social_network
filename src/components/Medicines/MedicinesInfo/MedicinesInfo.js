import React from "react"
import {NavLink} from "react-router-dom";


const MedicinesInfo = (props) => {

  let path = "/medicines/1";
  return (
    <div>
      <NavLink to={path}>{props.tablets}</NavLink>
    </div>
  )
};

export default MedicinesInfo;