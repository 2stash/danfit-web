import React from 'react';
import './app.scss'
import { Routes, Route, Link } from "react-router-dom"
import LandingPage from './pages/homepage/LandingPage'
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
