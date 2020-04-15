import React from "react"

const Infomation = (props) =>{
  return(
    <div>
      <form onSubmit={props.getMethod}>
        <button>Click</button>
      </form>
    </div>
  )
};

export default Infomation