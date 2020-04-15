const ADD_MESSAGE = 'ADD-MESSAGE';
/*const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'*/


let initialState = {
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
  ]
};

const dialogReducer = (state = initialState, action) => {


  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.newPostMessage;
      return{
        ...state,
        messages:[{message: body}]
      };

     /* stateCopy.newPostMessage = '';
      stateCopy.messages.push({message: body});*/


  /*  case UPDATE_NEW_POST_MESSAGE:
      return{
        ...state,
        newPostMessage : action.body,
        messages: [...state.messages]
      };*/
      //stateCopy.newPostMessage = action.body;
    default:
      return state;
  }
};

export const addMessageActionCreator = (newPostMessage) => {
  return {
    type: ADD_MESSAGE, newPostMessage
  }
};
/*export const updateNewPostMessageActionCreator = (body) => {
  return {
    type: UPDATE_NEW_POST_MESSAGE,
    body: body
  }
};*/

export default dialogReducer