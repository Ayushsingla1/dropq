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
import Restro from './Pages/Restro';
import NotFound from './Pages/NotFound';
import Menu from './Pages/Menu';
import Checkout from './Pages/Checkout';
function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element = {<Homepage/>}>
        <Route index element={<Home/>}/>
        <Route path = "/Malls" element  = {<Malls/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Sign" element = {<Sign/>}/>
        <Route path = "/Orders" element = {<Orders/>}/>
        <Route path = "/Orders/Checkout" element = {<Checkout/>}/>
        <Route path = "/Touch" element = {<Touch/>}/>
        <Route path = "/Restro/:id" element = {<Restro/>}/>
        <Route path = "/Restro/:id/Menu/:menuid" element = {<Menu/>}/>
        <Route path = "*" element = {<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
