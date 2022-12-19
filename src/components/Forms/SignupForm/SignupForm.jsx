import React, { useState } from "react";
import EmailInput from "../Fields/EmailInput/EmailInput";
import PasswordInput from "../Fields/PasswordInput/PasswordInput";
import NameInput from "../Fields/NameInput/NameInput";
import DropdownInput from "../Fields/DropdownInput/DropdownInput";

function SignupForm({
  onSubmit,
  onToggleSignup,
  error,
  username,
  password,
  setUsername,
  setPassword,
  validCheck,
}) {
  const [notice, setNotice] = useState("");

  function setEmail(value) {
    if (/[A-Z]/.test(value)) {
      setNotice(
        "That looked like uppercase; we switched to lowercase instead."
      );
    }

    const lowercased = value.toLowerCase();

    setUsername(lowercased);
  }

  const countryList = {
    value1: "Albania",
    value2: "Algeria",
    value3: "America",
    value4: "Israel",
  };
  const organizationList = {
    value1: "ISSTA",
    value2: "World Traveler",
    value3: "YMCA",
  };
  return (
    <form onSubmit={onSubmit}>
      <NameInput
        label="Agency Name*"
        inputName="agencyname"
        showLoginLink="signup"
        error={error}
        onSubmit={onSubmit}
        placeholder={"Enter Agency Name"}
      />
      <div className="row">
        <div className="col-sm-6 col-12">
          <NameInput
            label="First Name*"
            inputName="fname"
            showLoginLink="signup"
            error={error}
            onSubmit={onSubmit}
            placeholder={"Enter First Name"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <NameInput
            label="Last Name*"
            inputName="lname"
            showLoginLink="signup"
            error={error}
            onSubmit={onSubmit}
            placeholder={"Enter Last Name"}
          />
        </div>
      </div>
      <div className="country">
        <DropdownInput
          label="Country"
          inputName="countryname"
          showLoginLink="signup"
          error={error}
          onSubmit={onSubmit}
          placeholder={"Select a country"}
          dropDownObj={countryList}
        />
      </div>
      <EmailInput
        label="E-Mail*"
        inputName="email"
        showLoginLink="signup"
        onToggleSignup={onToggleSignup}
        error={error}
        notice={notice}
        onSubmit={onSubmit}
        value={username}
        setValue={setEmail}
        placeholder={"E-mail address"}
      />

      <div className="row">
        <div className="col-md-3 col-sm-3 col-3">
          <NameInput
            label="Phone*"
            inputName="phone"
            showLoginLink="signup"
            error={error}
            onSubmit={onSubmit}
            placeholder={""}
          />
        </div>
        <div className="col-md-9 col-sm-9 col-9">
          <NameInput
            label="-"
            inputName="phone"
            showLoginLink="signup"
            error={error}
            onSubmit={onSubmit}
            placeholder={""}
          />
        </div>
      </div>
      <div className="organization">
        <DropdownInput
          label="Organization"
          inputName="organizationname"
          showLoginLink="signup"
          error={error}
          onSubmit={onSubmit}
          placeholder={"Select an Organization"}
          dropDownObj={organizationList}
        />
      </div>
      <PasswordInput
        onSubmit={onSubmit}
        value={password}
        error={error}
        setValue={setPassword}
        validCheck={validCheck}
        label="Password*"
        inputName="new-password"
        placeholder={"Password"}
      />
      <PasswordInput
        onSubmit={onSubmit}
        value={password}
        error={error}
        setValue={setPassword}
        validCheck={validCheck}
        label="Confirm Password*"
        inputName="confirm-password"
        placeholder={"Password (again)"}
      />
    </form>
  );
}

export default SignupForm;
