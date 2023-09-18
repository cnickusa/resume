import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 items-center h-16 flex justify-center text-white">
      <ul className="flex gap-8">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
        <li>
          <NavLink    to="/edit">Edit</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
