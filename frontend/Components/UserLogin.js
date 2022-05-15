 


 import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import axios from "axios";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import Success from "../Components/Success";


export default function UserLogin() {
  

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const[loading, setloading]=useState(false)
    const[error, seterror]=useState(false)
    const[success, setsuccess]=useState(false)    

    useEffect(() => {

          if(localStorage.getItem('currentUser'))
          {
              window.location.href='/'
          }
        
    }, [])

    async function login(){
      const user={
     
        email,
        password
    }
      try {
        setloading(true)
        const result = await (await axios.post('http://localhost:5000/api/User/login',user)).data
        localStorage.setItem('currentUser',JSON.stringify(result))
        window.location.href='/home'
      } catch (error) {
        seterror(true)
        setloading(false)
        console.log(error);
        
      }
    }

    return (
        <div className='login'>
         <div className="row justify-content-center mt-12">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-12 ">
          <h1 className="text-center m-2" >
             Customer Login 
          </h1>
          <br></br>
          {loading && (<Loader/>)} 
          {error && (<Error error='Invalid Credentials'/>)}
          {success && (<Success success='User Login Successfully'/>)}
          <div>
            <input required type="text" placeholder=" enter your email" className="form-control mt-1" value={email} onChange={(e)=>{setemail(e.target.value)}} /><br></br>
            <input
              type="text"
              placeholder="enter your  password"
              className="form-control mt-1"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            
            <button onClick={login} className="btn btn-success mt-3 mb-6 ">login</button>
            <br/>
            <a style={{color:'black'}} href="/register" className="mt-2"> Register to the systems</a>
          </div>
        </div>
      </div>
        </div>
    )
}