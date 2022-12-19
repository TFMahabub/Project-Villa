import React from "react";
// import { ErrorDisplay } from '../../../Util/Interfaces';
import EmailInput from "../Fields/EmailInput/EmailInput";
import PasswordInput from "../Fields/PasswordInput/PasswordInput";

function LoginForm({
  onSubmit,
  onToggleSignup,
  error,
  username,
  password,
  setUsername,
  setPassword,
}) {
  console.log("user name", username);
  return (
    <form onSubmit={onSubmit}>
      <EmailInput
        onSubmit={onSubmit}
        value={username}
        setValue={setUsername}
        label="E-Mail*"
        inputName="email"
        showLoginLink="login"
        onToggleSignup={onToggleSignup}
        error={error}
        placeholder={"E-mail address"}
      />

      <PasswordInput
        onSubmit={onSubmit}
        value={password}
        setValue={setPassword}
        label="Password"
        inputName="current-password"
        placeholder={"Password"}
      />
      {/* <div style={{ height: "19px" }} /> */}
    </form>
  );
}
export default LoginForm;
