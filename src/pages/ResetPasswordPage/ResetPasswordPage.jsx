import React, { useEffect, useState } from "react";
import styles from "./ResetPasswordPage.module.scss";
import ResetPasswordForm from "../../components/Forms/ResetPasswordForm/ResetPasswordForm";
import Button from "../../components/Buttons/Button/Button";
import Logo from "../../components/Icons/Logo/Logo";
import TermsFooter from "../../components/TermsFooter/TermsFooter";

const ResetPasswordPage = () => {
  const [state, setState] = useState({
    loading: false,
    email: "",
  });
  const [smallScreen, setSmallScreen] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit >>>");
  };

  return (
    <>
      <div className="auth-box-parent">
        <div
          style={{
            boxSizing: "border-box",
            // fontFamily: "Source Sans Pro",
            height: "100%",
            padding: "48px",
            left: "0",
            position: "relative",
            top: "0",
            textAlign: "left",
            width: "100%",
          }}
        >
          <div>
            <div>
              <div className="w-100 d-flex justify-content-center">
                <div className="image image-width ">
                  <Logo />
                </div>
              </div>
              <div className="w-100 d-flex justify-content-center py-3">
                <h2 style={{ color: "#536D85" }}>Reset your password</h2>
              </div>
            </div>
            <p className={styles.instructions}>
              We'll email you instructions to reset the password.
            </p>
            <div>
              <ResetPasswordForm
                onSubmit={handleSubmit}
                // email={state.email}
                // setEmail={(value) => setState({ ...state, email: value })}
              />
            </div>

            <div className={styles.cta_bottom_box_button_reset}>
              <div>
                <Button
                  fullwidth={true}
                  variant="primary"
                  loading={state.loading}
                  text="Reset password"
                  // onClick={(e) => { setState({ ...state, error: undefined }); handleSubmit(e); }}
                  // disabled={(!state.email)}
                />

                <div className={styles.return_to_login_wrapper}>
                  Return to <a href="/">Log in</a>
                </div>
              </div>
            </div>
          </div>
          <div className={smallScreen ? "mt-5" : "py-2"}>
            <TermsFooter isMobile={smallScreen} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPasswordPage;
