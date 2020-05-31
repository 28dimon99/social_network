import React from "react"

import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";
import {sendMessageCreator} from "../../redux/dialogReducer";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }

    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);