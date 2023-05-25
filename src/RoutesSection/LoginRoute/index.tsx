import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  ErrorMsg,
  GlobalStyle,
  JobbyButton,
  JobbyLogoImage,
  LoginFormContainer,
  LoginFormItems,
  PasswordHeading,
  PasswordInputSection,
  UserNameHeading,
  UserNameInputSection,
} from "./stylecomponets";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({
    showLoginError: false,
    loginErrorMsg: "",
  });

  const onLoginSuccess = (jwtToken: string) => {
    Cookies.set("jobby_app_jwt_token", jwtToken, { expires: 2, path: "/" });
    history.replace("/");
  };

  const onLoginFailure = (errorMsg: string) => {
    console.log("in login failed func");

    setLoginError({ showLoginError: true, loginErrorMsg: errorMsg });
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://apis.ccbp.in/login";

    const options = {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === true) {
      onLoginSuccess(data.jwt_token);
    } else {
      onLoginFailure(data.error_msg);
    }
  };

  const onChangeOfUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangeOfPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const renderUsernameField = () => {
    return (
      <div className="input-container">
        <UserNameHeading className="input-label">USERNAME</UserNameHeading>
        <div>
          <UserNameInputSection
            type="text"
            id="username"
            className="input-el"
            onChange={onChangeOfUsername}
            value={username}
            placeholder="Username"
          />
        </div>
      </div>
    );
  };

  const renderPasswordField = () => {
    return (
      <div className="input-container">
        <PasswordHeading className="input-label">PASSWORD</PasswordHeading>
        <div>
          <PasswordInputSection
            type="password"
            id="passwprd"
            className="input-el"
            onChange={onChangeOfPassword}
            value={password}
            placeholder="Password"
          />
        </div>
      </div>
    );
  };

  const isLoggedIn = Cookies.get("jobby_app_jwt_token");

  if (isLoggedIn !== undefined) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <GlobalStyle />
      <LoginFormContainer>
        <LoginFormItems>
          <form className="form-container" onSubmit={onFormSubmit}>
            <JobbyLogoImage
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="jobby-webstire-logo"
              className="logo-img"
            />
            <div className="username-password-container">
              {renderUsernameField()}
              {renderPasswordField()}
            </div>
            <JobbyButton type="submit" className="login-btn">
              Login
            </JobbyButton>
            <div></div>
            {loginError.showLoginError && (
              <ErrorMsg className="login-error-msg">
                *{loginError.loginErrorMsg}
              </ErrorMsg>
            )}
          </form>
        </LoginFormItems>
      </LoginFormContainer>
    </>
  );
};

export default Login;
