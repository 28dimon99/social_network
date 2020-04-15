
import {getAuthUserData} from "./authReduser";


const SET_INITIALIZED_SUCCESS= 'SET_INITIALIZED_SUCCESS';



let initialState = {
   initialized: false,
   globalError: null
};

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:{
      return {...state,
             initialized: true
      }
    }
    default:
      return state;
  }
};




export const initializedSucsess = () => ({type: SET_INITIALIZED_SUCCESS});

//Thunk инициализация всего приложения
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  //Когда все промисы зарезолвятся верни нам initializedSucsess
  Promise.all([promise])
    .then(() => {
    dispatch(initializedSucsess())
  });
}
export default appReducer;