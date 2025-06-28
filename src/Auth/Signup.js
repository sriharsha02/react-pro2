import { useState } from "react";
import { validateEmail } from "../Utils/utils";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  //error variables

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mobileError, setMobileError] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleMobileChange(e) {
    setMobile(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleCreateAccount() {
    let noOfError = 0;
    if (name.length < 3) {
      setNameError("Min 3 characters");
      noOfError++;
    } else {
      setNameError("");
    }
    if (validateEmail(email)) {
      setEmailError("");
      console.log(emailError);
    } else {
      setEmailError("Email is invalid");
      console.log(emailError);
      noOfError++;
    }
    if (password.length < 8) {
      setPasswordError("Min 8 characters");
      noOfError++;
    } else {
      setPasswordError("");
    }
    if (mobile.length === 10) {
      setMobileError("");
    } else {
      setMobileError("Invalid mobile number");
      noOfError++;
    }
    if (noOfError === 0) {
      console.log("calling api", noOfError);
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Create Account</h3>
          <div className="mt-3 mb-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(event) => handleNameChange(event)}
            />
            <div className="text-danger"> {nameError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(event) => handleEmailChange(event)}
            />
            <div className="text-danger"> {emailError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Mobile</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              onChange={(e) => {
                handleMobileChange(e);
              }}
            />
            <div className="text-danger"> {mobileError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
            <div className="text-danger"> {passwordError}</div>
          </div>
          <div>
            <button
              className="btn btn-warning"
              onClick={(e) => {
                handleCreateAccount();
              }}
            >
              Create Account
            </button>
          </div>
          {name} <br />
          {email} <br />
          {mobile} <br />
          {password}
        </div>
      </div>
    </div>
  );
}

export default Signup;
