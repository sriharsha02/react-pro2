function Payment() {
  let userId = localStorage.getItem("loggedInUserId");
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {userId == null && (
            <div>
              <h3>Please Login to make payment</h3>
            </div>
          )}
          {userId != null && (
            <div>
              <button className="btn btn-primary">Proceed to Payment</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
