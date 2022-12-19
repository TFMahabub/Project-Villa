import React from "react";
import styles from "./EmailInput.module.scss";
import Check from "../../../Icons/Check/Check";
import DangerExclamation from "../../../Icons/DangerExlamation/DangerExclamation.jsx";
import { validateEmail } from "../../../../Util/ValidationUtil";

function EmailInput({
  onSubmit,
  value,
  setValue,
  label,
  inputName,
  showLoginLink,
  onToggleSignup,
  error,
  notice,
  placeholder = "",
  inputId = "username",
}) {
  function emailValid() {
    return validateEmail(value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };

  function loginLink() {
    switch (showLoginLink) {
      case "signup":
        return (
          <span>
            Already have an account?{" "}
            <span onClick={onToggleSignup}> Log in</span>
          </span>
        );

      case "login":
        return (
          <span>
            Need an account? <span onClick={onToggleSignup}> Sign up</span>
          </span>
        );

      case "none":
        return;
    }
  }

  return (
    <div className={styles.input_wrapper + " -fif_wrp"}>
      <div className={styles.label_wrapper + " -fif_label_wrp"}>
        <label htmlFor={inputName}>{label}</label>

        {/* {loginLink()} */}
      </div>
      <div
        className={
          styles.input_field_wrapper +
          " -fif_input_wrp " +
          (error !== undefined ? styles.error : ``)
        }
      >
        <input
          className={
            styles.input_field +
            " " +
            (error && error.placement === "email"
              ? styles.invalid
              : styles.valid)
          }
          onSubmit={onSubmit}
          onKeyPress={handleKeyDown}
          type="email"
          name="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          id={inputId}
          autoCapitalize="none"
          autoCorrect="false"
        />
        {(error === undefined || error.placement !== "email") &&
        emailValid() ? (
          <Check />
        ) : (
          ``
        )}
        {error !== undefined && error.placement === "email" ? (
          <DangerExclamation size={16} fill="red" />
        ) : (
          ``
        )}
      </div>
      {error && error.placement === "email" ? (
        <span className={styles.email_error}>{error.msg}</span>
      ) : (
        ``
      )}
      {notice !== undefined && error === undefined ? (
        <span className={styles.email_notice}>{notice}</span>
      ) : (
        ``
      )}
    </div>
  );
}
export default EmailInput;
