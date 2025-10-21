import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const handleSubmit = async () => {
    setFullName(`${firstName} ${lastName}`);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      First Name
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      Last Name
      <button onClick={handleSubmit}>Submit</button>
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}

export default App;
