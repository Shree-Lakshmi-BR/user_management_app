import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Usermanagement from "./components/UserManagement";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users" element={<Usermanagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
