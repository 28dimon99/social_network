import * as serviceWorker from './serviceWorker';

import React from "react"
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from "./App";







//let refreshPage = (state) =>{};

  ReactDOM.render(<SamuraiJSApp/>, document.getElementById('root'));

  //last commit
/*{/!*    <BrowserRouter>
      <Provider store={store}>
      <App //state={state} store={store}
           /!*addDoctor={store.addDoctor.bind(store)}
           updateNewPostTextDoctor={store.updateNewPostTextDoctor.bind(store)}
           addMessage={store.addMessage.bind(store)}
           updateNewPostMessage={store.updateNewPostMessage.bind(store)}*!/
            //dispatch={store.dispatch.bind(store)}
      />
      </Provider>
    </BrowserRouter>*!/}*/




/*refreshPage(store.getState());
store.subscribe(() =>{
  let state = store.getState()
  refreshPage(state);
});*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();