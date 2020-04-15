import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Receptions from "./components/Receptions/Receptions";
import Medicines from "./components/Medicines/Medicines";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Add from "./components/Request/Add";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReduser";
import Prelouder from "./components/common/Prelouder/Prelouder";
import {withSuspense} from "./hoc/withSuspense";
import store from "./redux/reduxStore";







const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  catchAllUnhandledErrors =(reason, promise) =>{
    alert("Some error occured");
    //console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandlerejection", this.catchAllUnhandledErrors)
  }
  componentWillUnmount(){
    window.removeEventListener("unhandlerejection",  this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Prelouder/>
    };

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path='/' render={() => <Redirect to={"/profile/"}/>}/>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
            <Route path='/receptions' render={() => <Receptions/>}/>
            <Route path='/sidebar' render={() => <SidebarContainer/>}/>
            <Route path='/medicines' render={() => <Medicines/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/add' render={() => <Add/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
          </Switch>
        </div>
      </div>

    );
  };
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
  </BrowserRouter>
};

export default SamuraiJSApp