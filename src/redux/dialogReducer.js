const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
  dialogs: [
    {name: "Dimon", id: 1},
    {name: "Igor", id: 2},
    {name: "Sonya", id: 3},
    {name: "Dasha", id: 4},
    {name: "Ira", id: 5}
  ],

  messages: [

    {message: "Hi"},
    {message: "How are your"},
    {message: "Yo"},
    {message: "Yo"},
    {message: "Yo"}

  ]
};

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {
      case SEND_MESSAGE:
      let body = action.newMessageBody;
      return{
        ...state,
        messages:[...state.messages, {id:6, message:body}]
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE, newMessageBody
  }
};


export default dialogReducer