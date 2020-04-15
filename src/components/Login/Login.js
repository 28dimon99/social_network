import React from "react"
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls" ;
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReduser";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormControls.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/*выносим в FormControls*/}
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {type: "password"})}
      {createField(null, "rememberMe", [], Input, {type:"checkbox"}, "remember me")}

      {/*     <Field placeholder={"Email"} name={"email"}
               validate={[required]}
               component={Input}/>*/}

        {/*<Field placeholder={"Password"} name={"password"} type={"password"}
               validate={[required]}
               component={Input}/>
      */}

        {/*<Field name={"rememberMe"} type={"checkbox"} component={Input}/> remember me*/}
      {captchaUrl && <img src={captchaUrl}/>}

      {error && <div className={s.formSummaryError}>
        {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
        {error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  )

};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login)