import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    navigate("/login"); // Redirect to the login page after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
