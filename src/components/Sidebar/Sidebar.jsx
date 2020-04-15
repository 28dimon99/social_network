import React from "react"
import SidebarName from "./SidebarName/SidebarName";
import MessageMan from "./MessageMan/MessageMan";


const Sidebar = (props) => {

  let state = props.sidebar;


let addPeopleClick = () => {
     props.addManClick()
  };

 let  onChangeMan = (e) =>{
   let text =  e.target.value;
   props.updateNewMan(text);
 };

  //let sidebarElements = props.state.sidebar.map(n => <SidebarName man={n.man}/>);

  let sidebarElements = state.sidebar.map(s => <SidebarName name={s.name} key={s.id} id={s.id}/>)
  let messageManElements = state.messages.map(m => <MessageMan messages={m.messages} key={m.id}/>);
  let newPostMan = state.newPostMan;


  return (
    <div>
      <div>
        <button onClick={addPeopleClick}>AddPeople</button>
      </div>
      <div>
        <textarea placeholder="ENTER YOUR MESSAGE" onChange={onChangeMan} value={newPostMan}/>
      </div>
      <div>
        {sidebarElements}
      </div>
      <div>
        {messageManElements}
      </div>
    </div>
  )
};

export default Sidebar
