import React, {PureComponent} from 'react'
import s from './MyPosts.module.css'

import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import Post from "../Post/Post";


const maxLengthCreator10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder={"Post message"}
               validate={[required, maxLengthCreator10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo (props => {

  let postsElements = [...props.posts]
      .reverse()
      .map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);

  };

  return (

    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  );
});


export default MyPosts;