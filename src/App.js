import React, { useState } from "react";
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName(""); // do not display if any field is empty
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

      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}

export default App;
