import React from "react";
import "../App.css";

const Navigation = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        VoTeX
      </a>
      <a href="#news">New Page</a>
      <a href="#contact">Sign Up</a>
      <a href="#about">Log In</a>
    </div>
  );
};

export default Navigation;
