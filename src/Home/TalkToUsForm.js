function TalkToUsForm({ message }) {
  return (
    <div className="container">
      <h4>{message}</h4>
      <div className="mt-3 mb-3">
        <label htmlFor="">Name</label>
        <input type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="mb-3">
        <label htmlFor="">Email</label>
        <input type="text" className="form-control" placeholder="Email" />
      </div>
      <div className="mb-3">
        <label htmlFor="">Mobile</label>
        <input type="text" className="form-control" placeholder="Mobile" />
      </div>
      <div className="mb-3">
        <button className="btn btn-warning">Submit</button>
      </div>
    </div>
  );
}

export default TalkToUsForm;
