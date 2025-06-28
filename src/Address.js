import { useState } from "react";

function Address() {
  const [buildingNumber, setBuildingNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");

  //error values
  const [buildingNumberError, setBuildingNumberError] = useState("");
  const [streetNameError, setStreetNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [pinError, setPinError] = useState("");
  const [countryError, setCountryError] = useState("");

  function handleBuildNumbChange(e) {
    setBuildingNumber(e.target.value);
  }
  function handleStreetNameChange(e) {
    setStreetName(e.target.value);
  }
  function handleCityChange(e) {
    setCity(e.target.value);
  }
  function handleStateChange(e) {
    setState(e.target.value);
  }
  function handlePinChange(e) {
    setPin(e.target.value);
  }
  function handleCountryChange(e) {
    setCountry(e.target.value);
  }
  function handleSubmit() {
    if (buildingNumber.length < 3) {
      setBuildingNumberError("Building Number invalid");
    } else {
      setBuildingNumberError("");
    }
    if (streetName.length < 3) {
      setStreetNameError("Min 3 characters");
    } else {
      setStreetNameError("");
    }
    if (city.length < 3) {
      setCityError("Min 3 characters");
    } else {
      setCityError("");
    }
    if (state.length < 3) {
      setStateError("Min 3 characters");
    } else {
      setStateError("");
    }
    if (pin.length === 6) {
      setPinError("");
    } else {
      setPinError("Invalid Pincode");
    }

    if (country.length < 3) {
      setCountryError("Min 3 characters");
    } else {
      setCountryError("");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Fill your details here</h3>
          <div className="mt-3 mb-3">
            <label htmlFor="">Building Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="House No."
              onChange={(event) => handleBuildNumbChange(event)}
            />
            <div className="text-danger">{buildingNumberError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Street Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Street Name"
              onChange={(event) => handleStreetNameChange(event)}
            />
            <div className="text-danger">{streetNameError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              onChange={(event) => handleCityChange(event)}
            />
            <div className="text-danger">{cityError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">State</label>
            <input
              type="text"
              className="form-control"
              placeholder="State"
              onChange={(event) => handleStateChange(event)}
            />
            <div className="text-danger">{stateError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Pincode</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pincode"
              onChange={(event) => handlePinChange(event)}
            />
            <div className="text-danger">{pinError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              onChange={(event) => handleCountryChange(event)}
            />
            <div className="text-danger">{countryError}</div>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={(event) => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
