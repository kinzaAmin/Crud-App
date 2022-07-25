import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const Userdetail = () => {

    const {id}= useParams();
    const[user, setuser]=useState({
        name: "",
        username: "",
        email: "",
        phone : "",
        website: ""
        });

        const loaduser = async ()=> {
            const result = await axios.get (`http://localhost:3001/users/${id}`)
            setuser(result.data);
         }
         useEffect (()=>{
            loaduser();
         }, [])
    return ( 
    <> 
     <div style={{marginTop: "10px"}}>
        <Link to="/" className="btn btn-primary">back to home</Link>
        <h1 className="display-4"> user.id: {id}</h1>
        <hr/>
        <ul className="list-group w-50" style={{boxShadow: "0px,10px rgba(0, 0, 0,0.6)"}}>
            <li className="list-group-item"> name:{user.name}</li>
            <li className="list-group-item"> name:{user.username}</li>
            <li className="list-group-item"> name:{user.email}</li>
            <li className="list-group-item"> name:{user.phone}</li>
            <li className="list-group-item"> name:{user.website}</li>
        </ul>
     </div>
    </>

    )
};
export default Userdetail;