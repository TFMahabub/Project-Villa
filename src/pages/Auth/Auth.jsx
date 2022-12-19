import React, { useEffect } from "react";
import { useState } from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import SignupForm from "../../components/Forms/SignupForm/SignupForm.jsx";
import Button from "../../components/Buttons/Button/Button.jsx";
import CheckBox from "../../components/CheckBox/CheckBox.jsx";
import ValidationHelper from "../../components/ValidationHelper/ValidationHelper.jsx";
import {
  nameValid,
  PWD_RULES,
  validateEmail,
} from "../../Util/ValidationUtil.js";
import Logo from "../../components/Icons/Logo/Logo";
import "./Auth.css";
import styles from "./Auth.module.scss";
import TermsFooter from "../../components/TermsFooter/TermsFooter";
import Alert from "../../components/Alert/Alert";

const Auth = (props) => {
  const [state, setState] = useState({
    // signup: props.signup,
    signup: false,
    // inputStage: 'signup',
    inputStage: "login",
    pwdRules: PWD_RULES,
    username: "",
    password: "",
    loading: false,
    first_name: "",
    last_name: "",
    organization: "",
    country: "",
    emailConsent: true,
    error: {},
    verification_resend_status: "none",
    userData: {},
  });

  console.log("state >>", state);
  const [smallScreen, setSmallScreen] = useState(false);
  //   console.log("small screen >>", smallScreen);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [screenSize]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("handle Submit >>>>", state);

    if (state.username.length === 0) {
      setState({
        ...state,
        error: {
          msg: "Please enter an email",
          placement: "email",
        },
        loading: false,
      });
      return;
    }

    if (!validateEmail(state.username)) {
      setState({
        ...state,
        error: {
          msg: "Looks like you forgot something",
          placement: "email",
        },
        loading: false,
      });
      return;
    }

    if (state.signup) {
      if (!passwordIsValid()) {
        setState({
          ...state,
          error: {
            msg: "Please check password",
            placement: "password",
          },
          loading: false,
        });
        return;
      }
    }
  };

  const handleToggleSignup = (e) => {
    e.preventDefault();

    setState({
      ...state,
      signup: !state.signup,
      inputStage: state.signup ? "login" : "signup",
      error: undefined,
    });
  };

  const handleChangePassword = (value) => {
    console.log("value from handleChangePassword >>> ", value);
    passwordIsValid();
    const pwdRules = state.pwdRules.map((rule) => {
      rule.valid = rule.regexp.test(value);
      return rule;
    });

    setState({
      ...state,
      pwdRules: pwdRules,
      password: value,
    });
  };
  const passwordIsValid = () => {
    return state.pwdRules.filter((rule) => rule.valid !== true).length === 0;
  };

  const inputForm = () => {
    switch (state.inputStage) {
      case "login":
        return (
          <LoginForm
            onSubmit={handleSubmit}
            onToggleSignup={handleToggleSignup}
            error={state.error}
            username={state.username}
            password={state.password}
            setUsername={(value) => setState({ ...state, username: value })}
            setPassword={handleChangePassword}
          />
        );

      case "signup":
        return (
          <SignupForm
            onSubmit={handleSubmit}
            onToggleSignup={handleToggleSignup}
            error={state.error}
            firstName={state.first_name}
            setFirstName={(value) => setState({ ...state, first_name: value })}
            lastName={state.last_name}
            setLastName={(value) => setState({ ...state, last_name: value })}
            organization={state.organization}
            setOrganization={(value) =>
              setState({ ...state, organization: value })
            }
            country={state.country}
            setCountry={(value) => setState({ ...state, country: value })}
            username={state.username}
            password={state.password}
            validCheck={passwordIsValid()}
            setUsername={(value) => setState({ ...state, username: value })}
            // setPassword={handleChangePassword}
          />
        );
    }
  };

  const ctaText = () => {
    switch (state.inputStage) {
      case "login":
        return "Log in";

      case "signup":
        return "Sign up";

      case "forgot_password":
        return "Send OTP";
    }
  };

  const header = () => {
    switch (state.inputStage) {
      case "login":
        return "Log in";

      case "signup":
        return "Sign up";

      case "forgot_password":
        return "Forgot password";
    }
  };

  function loginLink() {
    // switch (showLoginLink) {
    switch (state.inputStage) {
      case "signup":
        return (
          <span>
            Already have an account?{" "}
            <a className="custom-link" onClick={handleToggleSignup}>
              {" "}
              Log in
            </a>
          </span>
        );

      case "login":
        return (
          <span>
            Don't have an account?{" "}
            <a className="custom-link" onClick={handleToggleSignup}>
              {" "}
              Join Us
            </a>
          </span>
        );

      case "none":
        return;
    }
  }
  return (
    <>
      <div className="auth-box-parent">
        <div
          className={
            smallScreen === true ? "auth-box-child-mobile" : "auth-box-child"
          }
        >
          <div>
            <div>
              <div className="w-100 d-flex justify-content-center">
                <div className={"image image-width"}>
                  <Logo />
                </div>
              </div>
              {smallScreen === true ? (
                <h1
                  className={"w-100 d-flex justify-content-center py-3"}
                  style={{ color: "#536D85" }}
                >
                  {header()}
                </h1>
              ) : (
                <h2
                  className={"w-100 d-flex justify-content-center"}
                  style={{ color: "#536D85" }}
                >
                  {header()}
                </h2>
              )}
            </div>
          </div>
          <div>{inputForm()}</div>
          {state.inputStage === "signup" && (
            <>
              {/* <ValidationHelper rules={state.pwdRules} passMatch={true} /> */}
              <CheckBox
                id="talkWithRepresentative"
                name="talkWithRepresentative"
                padding="10px 0 10px 0"
                checked={false}
              >
                <span
                  className={
                    smallScreen === true
                      ? "d-flex align-items-center h-100 small-text "
                      : ""
                  }
                >
                  I would like to talk with a representative about a customized
                  portal for my agency
                </span>
              </CheckBox>
              <CheckBox
                id="termAndConditions"
                name="termAndConditions"
                padding="5px 0 20px 0"
                checked={true}
              >
                <span className={smallScreen === true ? "small-text " : ""}>
                  I have read and agree to our{" "}
                  {smallScreen === true ? <br /> : null}{" "}
                  <a href="javascript:void">Terms & Conditions</a> and{" "}
                  <a href="javascript:void"> Privacy Policy</a>.*
                </span>
              </CheckBox>
            </>
          )}

          <div className={"styles.cta_bottom_box"}>
            {state.inputStage === "login" ? (
              <>
                <div
                  className={
                    "d-flex justify-content-between align-items-center"
                  }
                >
                  <CheckBox
                    id="rememberMe"
                    name="rememberMe"
                    padding="15px 0 15px 0"
                    checked={false}
                  >
                    <span
                      className={
                        smallScreen === true
                          ? "d-flex align-items-center h-100 small-text "
                          : ""
                      }
                    >
                      Remember Me
                    </span>
                  </CheckBox>

                  <div>
                    <a
                      href="/forgot-password"
                      className={smallScreen === true ? "small-text" : ""}
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            {state.error && state.error.placement === "password" && (
              <Alert
                type={state.error.variant ? state.error.variant : "warning"}
                msg={state.error.msg}
              />
            )}

            <div className={"styles.cta_bottom_box_button_login"}>
              <Button
                variant="primary"
                fullwidth={true}
                onClick={handleSubmit}
                loading={state.loading}
                text={ctaText()}
              />
            </div>

            {state.inputStage === "signup" ? (
              <div className="w-100 d-flex justify-content-center pt-4">
                <div className={styles.input_wrapper}>
                  <div className={styles.label_wrapper}>{loginLink()}</div>
                </div>
              </div>
            ) : (
              ""
            )}

            {state.inputStage === "login" ? (
              <div className="w-100 d-flex justify-content-center pt-4">
                <div className={styles.input_wrapper}>
                  <div className={styles.label_wrapper}>{loginLink()}</div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className={smallScreen === true ? "mt-5" : "py-1"}>
              <TermsFooter isMobile={smallScreen} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Auth;
