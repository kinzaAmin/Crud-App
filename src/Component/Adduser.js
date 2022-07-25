import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "../Assets/Adduser.css";
const Adduser = () => {
    let navigate = useNavigate();
    const[user, setuser]=useState({
     name: "",
     username: "",
     email: "",
     phone : "",
     website: ""
     });

     const onInputChange= e => {
         setuser({...user,[e.target.name]: e.target.value})
     }
     const onSubmit= async e => {
        e.preventDefault();
     await axios.post("http://localhost:3001/users" , user);
     navigate("/");
     }
    return (
        <>
       <form className="Form" onSubmit={e => (onSubmit(e))}>
      <label style={{fontWeight: "bold", fontSize: "30px"}}> Add A User</label> <br/>
  <input type="text" id="fname" name="name" value={user.name} placeholder="Enter Your Name" onChange={e => (onInputChange(e))}/><br/>
  <input type="text" id="Username" name="username" value={user.username} placeholder="Enter User Name" onChange={e => (onInputChange(e))}/><br/>
  <input type="email" id="email" name="email" value={user.email} placeholder="Enter Your Email" onChange={e => (onInputChange(e))}/><br/>
  <input type="text" id="phone" name="phone" value={user.phone} placeholder="Enter Your Phone Number" onChange={e => (onInputChange(e))} /><br/>
  <input type="text" id="website" name="website" value={user.website} placeholder="Enter Your Website" onChange={e => (onInputChange(e))}/><br/>
  <input type="submit" value="Add User"style={{backgroundColor:"blue", color:"white"}} />

       </form>

      
        </>
    )
}
export default Adduser;