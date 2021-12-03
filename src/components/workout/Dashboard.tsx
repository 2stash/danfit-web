import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Nav from "./Nav";
import BodyWeight from "./BodyWeight";
import DashBoardHome from "./DashBoardHome";
import HomeGym from "./HomeGym";
import Nutrition from "./Nutrition";
import './dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<DashBoardHome />} />
          <Route path="/bodyweight" element={<BodyWeight />} />
          <Route path="/homegym" element={<HomeGym />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
