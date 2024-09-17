import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
