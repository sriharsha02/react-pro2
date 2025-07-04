import { useState } from "react";
import { validateEmail } from "../Utils/utils";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error variables

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [apiErrorMsg, setApiErrorMsg] = useState("");
  const [apiSuccessMsg, setApiSuccessMsg] = useState("");

  function handlEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleLogin() {
    let noOfErrors = 0;
    console.log(email, password);
    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid Email");
      noOfErrors++;
    }
    if (password.length < 3) {
      setPasswordError("Min 3 characters");
      noOfErrors++;
    } else {
      setPasswordError("");
    }
    if (noOfErrors == 0) {
      console.log("calling login api");

      let apiInputData = {
        email: email,
        password: password,
      };
      try {
        let apiResponse = await axios.post(
          "https://api.softwareschool.co/auth/login",
          apiInputData
        );
        console.log("API Response", apiResponse);
        if (apiResponse.data.result == "SUCCESS") {
          console.log(apiResponse.data.message);
          setApiSuccessMsg(apiResponse.data.message);
          setApiErrorMsg("");
          console.log(apiResponse.data.data.userId);
          localStorage.setItem("loggedInUserId", apiResponse.data.data.userId);
          window.location = "/";
        } else {
          setApiErrorMsg(apiResponse.data.message);
          setApiSuccessMsg("");
        }
      } catch (e) {
        setApiErrorMsg(e.message);
        setApiSuccessMsg("");
      }
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mt-3">
          <h3>Login Here</h3>
          <div className="mt-3 mb-3">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => handlEmailChange(event)}
              />
              <div className="text-danger">{emailError}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(event) => handlePasswordChange(event)}
              />
              <div className="text-danger">{passwordError}</div>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-warning"
                onClick={(event) => handleLogin()}
              >
                Login
              </button>
            </div>
            <div className="alert alert-success">{apiSuccessMsg}</div>
            <div className="alert alert-danger">{apiErrorMsg}</div>
            <div>
              {email} <br />
              {password}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
