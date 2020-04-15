const PEOPLES = 'PEOPLES';
const UPDATE_NEW_POST_MAN = 'UPDATE-NEW-POST-MAN';

let initialState = {
  sidebar: [
    {man: "Andrey", id: 1},
    {man: "Igor", id: 2},
    {man: "Oleg", id: 3},
    {man: "Dimon", id: 4},
    {man: "Aleks", id: 5}
  ],
  newPostMan: '',

  messages: [

    {women: "Alina", id: 1},
    {women: "Anna", id: 2},
    {women: "Darina", id: 3},
    {women: "Elena", id: 4},
    {women: "Vika", id: 5}
  ],
};

const sidebarReducer = (state = initialState, action) => {

  switch (action.type) {
    case PEOPLES: {
      let text = state.newPostMan;
      let stateCopy = {...state};
      stateCopy.posts.push({man: text});
      stateCopy.newPostMan = '';
      return stateCopy;
    }

    case UPDATE_NEW_POST_MAN: {
      let stateCopy = {...state};
      stateCopy.newPostMan = action.text;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPeoplesActionCreator = () => {
  return {
    type: PEOPLES
  }
};

export const updateNewPostManActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_MAN,
    text: text
  }
};

export default sidebarReducer;