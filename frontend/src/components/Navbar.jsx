import '../assets/CSS/navbar.css'
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>MyAuthApp</h2>
      <div>
        <Link to="/">Register</Link> | <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
