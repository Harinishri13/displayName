import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(null); // null = no submission yet

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only set fullName if both fields are non-empty
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName(""); // empty string = invalid submission
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

      {/* 
        Logic for rendering <h2>:
        - If user has never submitted the form (fullName === null), show placeholder for initial page load.
        - If user submitted with valid fields, show full name.
        - If user submitted with empty field(s), show nothing.
      */}
      {fullName === null ? (
        <h2>Full Name Display</h2>
      ) : fullName ? (
        <h2>Full Name: {fullName}</h2>
      ) : null}
    </div>
  );
}

export default App;
