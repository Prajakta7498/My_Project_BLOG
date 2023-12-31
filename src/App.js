import React from 'react';
import Register from "./components/Register/Register";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={user? <Home/> : <Login/>} />
        <Route path="/register" element={user ? <Home/> : <Register/>} />
        <Route path="/login" element={user ? <Home/> : <Login/>} />
        <Route path="/settings" element={user ? <Settings/> : <Register/>} />
        <Route path="/write" element={user ? <Write/> : <Register/> } />
        <Route path="/post/:postId" element={<Single/>} />
      </Routes>
    </Router> 
  );
}

export default App;
