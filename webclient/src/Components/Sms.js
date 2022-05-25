import React, { useEffect , useState } from 'react'
import axios from "axios";

 function Sms  ({}) {

    const smsfunc= (e) => {
        
        e.preventDefault();
        let number = JSON.parse(localStorage.getItem('currentUser')).phonenumber
        console.log("Phone number ",number)
        let data = {
            number:number
        }
        axios.post("http://localhost:5000/smsroute/sms/",data)
        .then((data)=>{
            console.log(data);
            alert("Success");
        })
        .catch((err)=>{
            console.log(err);
        })
 }

 

 const [phonenumber , setphonenumber]=useState()
 const[room , setroom]=useState()




  return (

    <div>Sms

    <p><b>phonenumber</b> : {JSON.parse(localStorage.getItem('currentUser')).phonenumber}</p>

    <button className='btn btn-primary' onClick={(e)=>smsfunc(e)}>Pay Now</button>

</div>
  )
}


export default Sms;