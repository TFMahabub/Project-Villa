import React from "react";
import styles from "./DropdownInput.module.scss";
import { nameLooksLikeEmail, nameValid } from "../../../../Util/ValidationUtil";

function DropdownInput({
  onSubmit,
  value,
  setValue,
  label,
  inputName,
  placeholder,
  error,
  dropDownObj,
}) {
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
        <select
          className={styles.input_field}
          name={label}
          value={placeholder}
          id={label + "id"}
        >
          <option>{placeholder}</option>
          <option value={dropDownObj.value1}>{dropDownObj.value1}</option>
          <option value={dropDownObj.value2}>{dropDownObj.value2}</option>
          <option value={dropDownObj.value3}>{dropDownObj.value3}</option>
        </select>
      </div>
    </div>
  );
}
export default DropdownInput;
