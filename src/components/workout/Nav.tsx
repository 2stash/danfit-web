import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
      <div className="nav-container">
        <nav className="nav">
          <ul>
            <li>
              <Link className="links" to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link className="links" to="/dashboard/bodyweight">BodyWeight</Link>
            </li>
            <li>
              <Link className="links" to="/dashboard/homegym">Home Gym</Link>
            </li>
            <li>
              <Link className="links" to="/dashboard/nutrition">Nutrition</Link>
            </li>
          </ul>
        </nav>

        <div className="outlet">
          <Outlet />
        </div>
      </div>
    );
  }
  
  export default Nav;
