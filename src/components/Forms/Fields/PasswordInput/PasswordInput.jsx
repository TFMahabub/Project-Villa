import React, { useState } from "react";
import EyeIcon from "../../../Icons/EyeIcon/EyeIcon.jsx";
import styles from "./PasswordInput.module.scss";
import Check from "../../../Icons/Check/Check";
import DangerExclamation from "../../../Icons/DangerExlamation/DangerExclamation.jsx";

function PasswordInput({
  onSubmit,
  value,
  setValue,
  label,
  inputName,
  validCheck,
  error,
  placeholder,
}) {
  const [showPwd, setShowPwd] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };

  return (
    <div className={styles.input_wrapper}>
      <div className={styles.label_wrapper}>
        <label htmlFor={inputName}>{label}</label>
      </div>

      <div className={"-fif_input_wrp"}>
        <input
          onSubmit={onSubmit}
          onKeyPress={handleKeyDown}
          className={
            styles.input_field +
            " " +
            (error && error.placement === "password" && !validCheck
              ? styles.invalid
              : styles.valid)
          }
          name={inputName}
          type={showPwd ? "text" : "password"}
          value={value}
          // onChange={(e) => setValue(e.target.value)}
          onChange={(e) => console.log(e.target.value)}
          placeholder={placeholder}
          id={inputName}
        />

        {(error === undefined || error.placement !== "password") &&
        validCheck ? (
          <Check />
        ) : (
          ``
        )}
        {error !== undefined &&
        error.placement === "password" &&
        !validCheck ? (
          <DangerExclamation size={16} fill="red" />
        ) : (
          ``
        )}
        {showPwd ? (
          <span
            onClick={() => setShowPwd(!showPwd)}
            className={styles.show_pwd_btn + styles.hide}
          >
            <EyeIcon slashed={true} />
          </span>
        ) : (
          <span
            onClick={() => setShowPwd(!showPwd)}
            className={styles.show_pwd_btn}
          >
            <EyeIcon slashed={false} />
          </span>
        )}
      </div>
    </div>
  );
}
export default PasswordInput;
