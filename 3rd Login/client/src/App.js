import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/Header";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import ClientArea from "./components/client_area/ClientArea.js";
import AdminArea from "./components/admin_area/AdminArea.js";
import "bootstrap/dist/css/bootstrap.min.css";


export default () => {
const [isLoggedIn, setIsloggedIn] = useState(false);
const [userRole, setUserRole] = useState(0)

useEffect(() => {
  axios.get('/checkAuth', { withCredentials: true})
  .then(resp => {
    if(resp.data.id) {
      setIsloggedIn(true)
      setUserRole(resp.data.role)
    }
  })
}, [])

const handleLoginState = (loggedIn, role) => {
  setIsloggedIn(loggedIn)
  setUserRole(role)
}

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        {!isLoggedIn && (<Route path="/registration" element={<Registration />} />)}
          {!isLoggedIn && (<Route path="/login" element={<Login state={handleLoginState} />} />)}
          {userRole === 1 && (<Route path="/admin" element={<AdminArea />} /> )}
          <Route path="/" element={<ClientArea />} />
        </Routes>
      </Router>
    </div>
  );
};
