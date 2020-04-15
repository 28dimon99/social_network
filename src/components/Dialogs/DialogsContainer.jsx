import React from "react"
import {addMessageActionCreator, /*updateNewPostMessageActionCreator*/} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


/*const DialogsContainer = () => {

  return <StoreContext.Consumer>
      {
        (store) => {
        let state = store.getState().dialogPage;

        let addMessageClick = () => {
          store.dispatch(addMessageActionCreator())
        };

  let onChangeMessage = (body) => {
    store.dispatch(updateNewPostMessageActionCreator(body))
  };

  return <Dialogs addMessage={addMessageClick} updateNewPost={onChangeMessage} dialogPage={state} />
}
}
</StoreContext.Consumer>
}*/


let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newPostMessage) => {
      dispatch(addMessageActionCreator(newPostMessage))
    }
  /*  updateNewPost: (body) => {
    dispatch(updateNewPostMessageActionCreator(body))
  }*/
}
};


/*let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);