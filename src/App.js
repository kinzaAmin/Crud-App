import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Component/Home'; 
import About from './Component/About'; 
import Contact from './Component/Contact'; 
import Navbar from './Component/Layout/Navbar';
import Adduser from './Component/Adduser';
import Edituser from './Component/Edituser';
import Userdetail from "./Component/Viewuserdetail";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    
     <Router>
     <Navbar/> 
    <Routes>
      <Route exact path ="/" element ={<Home/>}/>
      <Route exact path ="/about" element ={<About/>}/>
      <Route exact path ="/contact" element ={<Contact/>}/>
      <Route exact path ="/users/add" element ={<Adduser/>}/>
      <Route exact path ="/users/edit/:id" element ={<Edituser/>}/>
      <Route exact path ="/users/details/:id" element ={<Userdetail/>}/>
    </Routes>

    
    </Router>
    </>
    
  );
}

export default App;
