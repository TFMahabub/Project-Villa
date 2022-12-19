import React from "react";
import styles from "./NameInput.module.scss";
import { nameLooksLikeEmail, nameValid } from "../../../../Util/ValidationUtil";

function NameInput({
  onSubmit,
  value,
  setValue,
  label,
  inputName,
  placeholder,
  error,
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };
  const errorState = () => {
    return (
      nameLooksLikeEmail(value) ||
      (error !== undefined && error.placement === inputName)
    );
  };

  return (
    <div className={styles.input_wrapper + " -fif_wrp"}>
      <div className={styles.label_wrapper + " -fif_label_wrp"}>
        <label htmlFor={inputName}>{label}</label>
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
            (errorState() ? styles.invalid : styles.valid)
          }
          onSubmit={onSubmit}
          onKeyPress={handleKeyDown}
          type="text"
          // name={inputName}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder ? placeholder : ""}
          // id={"modal_" + inputName}
          autoCapitalize="none"
          autoCorrect="false"
        />
      </div>
    </div>
  );
}
export default NameInput;
