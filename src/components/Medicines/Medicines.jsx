import React from "react"
import MedicinesInfo from "./MedicinesInfo/MedicinesInfo"

const Medicines = (props) =>{

let MedicinesElements = props.state.orders.map(t =><MedicinesInfo tablets={t.tablets}/>);
  return(
    <div>
    {MedicinesElements}
    </div>
  )
};

export default Medicines