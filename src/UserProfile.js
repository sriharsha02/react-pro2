import { useState } from "react";
function UserProfile() {
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [reading, setReading] = useState("");

  const [travelling, setTravelling] = useState("");
  const [gaming, setGaming] = useState("");
  const [music, setMusic] = useState("");
  const [sports, setSports] = useState("");

  function handleCountry(e) {
    setCountry(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }
  function handleReading(e) {
    if (e.target.checked === true) {
      setReading(true);
    } else {
      setReading(false);
    }
  }

  function handleTravelling(e) {
    if (e.target.checked === true) {
      setReading(true);
    } else {
      setReading(false);
    }
  }
  function handleGaming(e) {
    if (e.target.checked === true) {
      setGaming(true);
    } else {
      setGaming(false);
    }
  }

  function handleMusic(e) {
    if (e.target.checked === true) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  }

  function handleSports(e) {
    if (e.target.checked === true) {
      setSports(true);
    } else {
      setSports(false);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Fill Your Details</h3>
          <div className="mt-3 mb-3">
            <label className="form-label">Select Country</label>
            <select
              name=""
              id=""
              className="form-select"
              onChange={(event) => handleCountry(event)}
            >
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Russia">Russia</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className="mb-3">
            <div>
              <label htmlFor="">Gender</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                value="Male"
                name="gender"
                className="form-check-input"
                onChange={(event) => handleGender(event)}
              />
              <label htmlFor="">Male</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                value="Female"
                name="gender"
                className="form-check-input"
                onChange={(event) => handleGender(event)}
              />
              <label htmlFor="" className="form-check-label">
                Female
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="">Favourite Movie</label>
          </div>
          <div className="form-check">
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="Reading"
                onChange={(event) => handleReading(event)}
              />
              <label htmlFor="" className="form-check-label">
                Reading
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="Travelling"
                onChange={(event) => handleTravelling(event)}
              />
              <label htmlFor="" className="form-check-label">
                Travelling
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="Gaming"
                onChange={(event) => handleGaming(event)}
              />
              <label htmlFor="" className="form-check-label">
                Gaming
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="Music"
                onChange={(event) => handleMusic(event)}
              />
              <label htmlFor="" className="form-check-label">
                Music
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="Sports"
                onChange={(event) => handleSports(event)}
              />
              <label htmlFor="" className="form-check-label">
                Sports
              </label>
            </div>
            Country: {country} <br />
            Gender: {gender} <br />
            Reading:{reading.toString()} <br />
            Travelling: {travelling.toString()} <br />
            Gaming: {gaming.toString()} <br />
            Music: {music.toString()} <br />
            Sports: {sports.toString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
