import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home';
import Malls from './Pages/Malls';
import Touch from './Pages/GetTouch';
import Sign from './Pages/Sign';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Orders from './Pages/Orders';
import Navbar from './Components/Nav';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Homepage/>}>
        <Route index element={<Home/>}/>
        <Route path = "/Malls"element  = {<Malls/>}/>
        <Route path = "/Login"element = {<Login/>}/>
        <Route path = "/Sign"element = {<Sign/>}/>
        <Route path = "/Orders"element = {<Orders/>}/>
        <Route path = "/Touch"element = {<Touch/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
