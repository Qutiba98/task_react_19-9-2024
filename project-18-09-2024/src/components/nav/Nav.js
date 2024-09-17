import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // تأكد من أن المسار صحيح

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/api/xml">XMLHttpRequest</Link>
        </li>
        <li>
          <Link to="/api/fetch">Fetch API</Link>
        </li>
        <li>
          <Link to="/api/axios">Axios</Link>
        </li>
        <li>
          <Link to="/sale">Sale Countdown</Link>
        </li>
        <li>
          <Link to="/userinfo">User Info Form</Link>
        </li>
        <li>
          <Link to="/compare">Fetch vs Axios</Link>
        </li>
        <li>
          <Link to="/fetch-promises">Fetch with Promises</Link>
        </li>{" "}
        {/* New link */}
      </ul>
    </nav>
  );
}

export default Nav;
