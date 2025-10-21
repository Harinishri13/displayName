import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(null); // null = initial page load, "" = invalid submission

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName(""); // empty string for invalid submission
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Render <h2> based on submission state */}
      {
        fullName === null ? (
          <h2>Full Name Display</h2> // Initial page load
        ) : fullName ? (
          <h2>Full Name: {fullName}</h2> // Valid submission
        ) : null /* Invalid submission (edge case) */
      }
    </div>
  );
}

export default App;
