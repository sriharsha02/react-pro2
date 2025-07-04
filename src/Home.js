function Home() {
  let userId = localStorage.getItem("loggedInUserId");
  function logout() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Coding is easy and fun</h3> <br />
          {userId == null && (
            <div>
              <a href="/create-account">Signup</a> <br />{" "}
              <a href="/login">Login</a>
            </div>
          )}
          {userId != null && (
            <div>
              <h1>Welcome User</h1>
            </div>
          )}
          {
            <button className="btn btn-primary" onClick={(e) => logout()}>
              Logout
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
