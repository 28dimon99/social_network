import React from "react"
import {connect} from "react-redux";
import {
  follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers

} from "../../redux/usersReduser";
import Users from "./Users";
import Preloader from "./../common/Prelouder/Prelouder";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return <>
    {this.props.isFetching ? <Preloader/> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
           pageSize={this.props.pageSize}
           currentPage={this.props.currentPage}
           onPageChanged={this.onPageChanged}
           users={this.props.users}
           follow={this.props.follow}
           unfollow={this.props.unfollow}
           followingInProgress={this.props.followingInProgress}
           toggleFollowingProgress={this.props.toggleFollowingProgress}/>
    </>
  }
}

const mapStateToProps = (state) => {
  return {

    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};

export default compose(
  connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingProgress,getUsers /*: getUsers*/}),
  withAuthRedirect
)(UsersContainer)


