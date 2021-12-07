import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Nav from "./Nav";
// import BodyWeight from "./BodyWeight";
import DashboardHome from "./DashboardHome";
// import HomeGym from "./HomeGym";
// import Nutrition from "./Nutrition";
import WorkoutHome from "../workout/WorkoutHome";
import './dashboard.scss'

const Dashboard = ():JSX.Element => {
  return (
    <div className="dashboard">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<DashboardHome />} />
          <Route path="/workout" element={<WorkoutHome />}/>
          {/* <Route path="/bodyweight" element={<BodyWeight />} />
          <Route path="/homegym" element={<HomeGym />} />
          <Route path="/nutrition" element={<Nutrition />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
