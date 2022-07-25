import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import Adduser from "./Adduser";
// import {users} from "../../db.json"
// import userEvent from "@testing-library/user-event";
const Home = () => {
    const[users, setUsers]=useState([]);
   
  
    useEffect( ()=>{
        loadusers();
    // console.log("hello this is reqruiters list");
    
    }, []);

    const loadusers= async () => {
        const result = await axios.get("http://localhost:3001/users");
        console.log (result);
        setUsers((result?.data).reverse());
       
    };
    const deleteUser = async (id) => {
      await axios.delete (`http://localhost:3001/users/${id}`);
      loadusers();
 }
 
    return(
        <>
        <div className="py-4" style={{marginLeft: "40px", marginRight: "120px"}}>
      
     <table class="table caption-top" style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)", marginLeft:"50px", marginRight:"50px"}}>
  {/* <caption>List of users</caption> */}
  <thead>
    <tr>
      <th scope="col">UserID</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody className="users-data" >
    {
        users?.map ( (user, index) => (

            <tr>
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td> 
            <Link to="/users/add" class ="btn btn-light" style={{margin: "2px"}}>Add User</Link>
               <Link to={`/users/edit/${user.id}`} class ="btn btn-outline-primary " style={{margin: "2px"}}>edit </Link>
                <Link to={`/users/details/${user.id}`} class ="btn btn-primary " style={{margin: "2px"}}> view</Link>
                <Link to="/" class ="btn btn-danger" style={{margin: "2px"}} onClick={ () => deleteUser(user.id)} >delete </Link>
                
            </td>
          </tr>
        ))}
   
   
  </tbody>
</table>
        </div>
        
        </>
    )
}
export default Home;