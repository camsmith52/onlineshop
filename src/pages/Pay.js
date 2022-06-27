import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { VALIDATOR_REQUIRE } from "../Validation/Validate";

const Pay = ({ loggedIn, setLoggedIn }) => {
  //State
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");
  //Helper functions

  //JSX
  return (
    <div>
      <div className="ui form">
        <div className="fields">
          <div className="field">
            <label>Full name</label>
            <input
              placeholder="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Card number:</label>
            <input
              placeholder="Card number"
              value={number}
              type="number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Security number:</label>
            <input
              placeholder="CVV"
              value={cvv}
              type="number"
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
      </div>
      {!loggedIn && <p style={{ color: "red" }}>Log in to purchase</p>}
      <button
        disabled={!name || !number || !cvv || !loggedIn}
        className="ui button"
      >
        Pay now
      </button>
      
    </div>
  );
};

export default Pay;
