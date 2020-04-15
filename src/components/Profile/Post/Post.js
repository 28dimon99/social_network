import React from 'react'
import s from './Post.module.css'

const Post = (props) =>{

  return(
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmaF_6xpaTfMDpqTads1RQuMRz_Xx2oXtWT3Tox-c476joCqS"/>
      {props.message}
      {props.like}
    </div>
  );

}

export default Post;