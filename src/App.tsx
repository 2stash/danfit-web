import React from 'react';
import './app.scss'
import { Routes, Route, Link } from "react-router-dom"
import LandingPage from './components/landingpage/LandingPage'
import DashBoard from './components/workout/Dashboard'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<DashBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
