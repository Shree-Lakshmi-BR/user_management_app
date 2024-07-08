import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Myntra</h1>
      <div>
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">User Management</Link>
      </div>
    </nav>
  );
}

export default Navbar;
