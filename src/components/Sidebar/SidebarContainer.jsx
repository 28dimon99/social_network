import React from "react"
import {} from "../../redux/sidebarReducer";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {addPeoplesActionCreator} from "../../redux/sidebarReducer";
import {updateNewPostManActionCreator} from "../../redux/sidebarReducer";



/*const SidebarContainer = (props)=>{
  let state = props.store.getState().sidebar;

let newPeoples = () =>{
  props.store.dispatch(peopleActionCreator())
}

  return <Sidebar addPeoples = {newPeoples} sidebar={state}/>
};*/

let mapStateToProps = (state) =>{
  return {
    sidebar: state.sidebar,
    messages: state.message
  }
};

let mapDispathToProps = (dispatch) =>{
  return {
    addManClick: () =>{
      dispatch(addPeoplesActionCreator())
    },
    updateNewMan: () =>{
      dispatch(updateNewPostManActionCreator())
    }
  }
};

const SidebarContainer = connect(mapStateToProps, mapDispathToProps)(Sidebar);

export default SidebarContainer
