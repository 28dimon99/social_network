import profileReducer from"./profileReducer"
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state :{

    profilePage: {
      posts: [
        {message: "Doctor 1!!!"},
        {message: "Doctor 2!!!"}
      ],
      newPostText:""
    },

    dialogPage: {
      dialogs: [
        {name: "Patient1", id: 1},
        {name: "Patient2", id: 2},
        {name: "Patient3", id: 3},
        {name: "Patient4", id: 4},
        {name: "Patient5", id: 5}
      ],

      messages: [

        {message: "Medical history 1"},
        {message: "Medical history 2"},
        {message: "Medical history 3"},
        {message: "Medical history 4"},
        {message: "Medical history 5"}
      ],

      newPostMessage:''
    },

    sidebar: {
      peoples: [
        {man: "Andrey", id: 1},
        {man: "Igor",   id: 2},
        {man: "Oleg",   id: 3},
        {man: "Dimon",  id: 4},
        {man: "Aleks",  id: 5}
      ]
    },
    medicines:{
      orders:[
        {tablets:"Decatilen"},
        {tablets:"Analgin"},
        {tablets:"Noshpa"},
        {tablets:"Solpadein"},
        {tablets:"Amizol"}

      ]
    },

  },

  getState(){
    return this._state
  },

  _callSubscribe() {
    console.log('State changed')
  },

/*  addDoctor(){

    let newDoctor = {

      message: this._state.profilePage.newPostText
    };
    this._state.profilePage.posts.push(newDoctor);
    this._state.profilePage.newPostText="";

    this._callSubscribe(this._state)
  },*/

/*  updateNewPostTextDoctor(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscribe(this._state)
  },*/

/*  addMessage(textMessage){
    let newMessage = {
      message: textMessage
    };
    this._state.dialogPage.messages.push(newMessage);
    this._callSubscribe(this._state)
  },*/

 /* updateNewPostMessage(newText){
    this._state.dialogPage.newPostDialogs = newText;
    this._callSubscribe( this._state)
  },*/

   /* if(action.type === ADD_DOCTOR ){
      let newDoctor = {
        message: this._state.profilePage.newPostText
      };
      this._state.profilePage.posts.push(newDoctor);
      this._state.profilePage.newPostText="";
      this._callSubscribe(this._state)

    }else if(action.type === UPDATE_NEW_POST_TEXT_DOCTOR){
     this._state.profilePage.newPostText = action.newText;
     this._callSubscribe(this._state)

   } else if(action.type === ADD_MESSAGE){
      let body = this._state.dialogPage.newPostMessage;
      this._state.dialogPage.newPostDialogs = '';
      this._state.dialogPage.messages.push({message:body})
      this._callSubscribe( this._state)

   }else if(action.type === UPDATE_NEW_POST_MESSAGE){
      this._state.dialogPage.newPostMessage = action.body
      this._callSubscribe(this._state)
   }*/

    dispatch(action){
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  },
  subscribe(observer){
    this._callSubscribe(observer);//observer
  }
};



window.store = store;
//store - OOP
  export default store