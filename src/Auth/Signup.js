import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
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
  function handleCreateAccount() {}
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
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(event) => handleEmailChange(event)}
            />
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
