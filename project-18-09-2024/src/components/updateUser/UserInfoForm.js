// src/components/updateUser/UserInfoForm.js
import React, { useState } from "react";

function UserInfoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setSubmittedEmail(email);
  };

  return (
    <div>
      <h1>Update User Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedName && submittedEmail && (
        <div>
          <h2>Submitted Information:</h2>
          <p>
            <strong>Name:</strong> {submittedName}
          </p>
          <p>
            <strong>Email:</strong> {submittedEmail}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserInfoForm;
