import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "green" : "gray",
    };
  };
  return (
    <div>
      <div className="site_title">
        <h2>React CRUD Operation</h2>
      </div>
      <nav>
        <NavLink style={navLinkStyles} to="/create">
          Create New
        </NavLink>
        <NavLink style={navLinkStyles} to="/read">
          Show List
        </NavLink>
      </nav>
    </div>
  );
};
