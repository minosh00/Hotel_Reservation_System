
 import React, { useEffect , useState } from 'react'
 import axios from "axios";
 import Swal from 'sweetalert2'
 import Error from "../Components/Error";
 import Loader from "../Components/Loader";
 import Success from '../Components/Success'
 import StripeCheckout from 'react-stripe-checkout'
 import { Link } from "react-router-dom";

 import moment from "moment"
 import AOS from 'aos';

 AOS.init();
 AOS.refresh()

 function BookingRoom({match}) {



     const[loading, setloading]=useState(true);
     const[error, seterror]=useState(false)
     const[success, setsuccess]=useState(false)   
     const[room , setroom]=useState()
     const roomid=match.params.roomid
     const fromdate=moment(match.params.fromdate , 'DD-MM-YYYY')
     const todate=moment(match.params.todate,'DD-MM-YYYY')
     const totalDays = moment.duration(todate.diff(fromdate)).asDays()+1
     const [totalAmount , settotalAmount]=useState()
     const [phonenumber , setphonenumber]=useState()



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








     useEffect(async() => {
         
         try {
             setloading(true);
             const data = await (await axios.post("http://localhost:5000/api/rooms/getRoomByid" , {roomid})).data;
             console.log(data);
             setroom(data);
             setphonenumber(data);
             setloading(false);
             settotalAmount(data.rentPerDay * totalDays)
           } catch (error) {
             console.log(error);
             setloading(false);
           }
           
     }, [])
 
 
     async function tokenHander(token) {
     
         console.log(token);
         const bookingDetails ={
 
             token ,
             user : JSON.parse(localStorage.getItem('currentUser')),
             room ,
             fromdate,
             phonenumber,
             todate,
             totalDays,
             totalAmount
 
         }
 
 
         try {
             setloading(true);
             const result = await axios.post('http://localhost:5000/api/bookings/bookroom' , bookingDetails)
             setloading(false)
             Swal.fire('Congrats' , 'Your Room has booked succeessfully' , 'success').then(result=>{
                 window.location.href='/profile'
             })
         } catch (error) {
             console.log(error);
             setloading(false)
             Swal.fire('Oops' , 'Something went wrong , please try later' , 'error')
         }
         
     }
 
     return (
         <div className='m-5'>
             
             {loading ? (<Loader/>) : error ? (<Error/>) : (
 
                 <div className="row p-3 mb-5 bs" data-aos='flip-right' duration='2000'>
 
                       <div className="col-md-6 my-auto">
                         
                          <div>
                          <h1> {room.name}</h1>
                          <img src={room.imageUrl[0]} className="img-fluid" />
                          </div>
 
                       </div>
                       <div className="col-md-6 text-right">
                            <div>
                            <h1><b>Booking Details</b></h1>
                          
 
                            <p><b>Name</b> : {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                            <p><b>From Date</b> : {match.params.fromdate}</p>
                            <p><b>To Date</b> : {match.params.todate}</p>
                            <p><b>phone number</b> : {JSON.parse(localStorage.getItem('currentUser')).phonenumber}</p>

                            </div>
                            
                            <div className='mt-5'>
                            <h1><b>Amount</b></h1>
                         
                            <p>Total Days : <b>{totalDays}</b></p>
                            <p>Rent Per Day : <b>{room.rentPerDay}</b></p>
                            <h1><b>Total Amount : {totalAmount} /-</b></h1>
                            <Link to="/Taxi">
        <button type="button" class="btn btn-primary">
         need taxi
        </button>
      </Link>
                            

                   <br></br>
                   <br></br>
                   <br></br>
                           <StripeCheckout
        
            token={tokenHander}
            stripeKey='pk_test_51KyZL6FeoRdqg6f816PBNMT9VvvDUCbwgUS6pvLiK2kQ6Mvx3q4BOFTQc9ENZpb0IeCH2a3GABcaxBbTStcyvocg00TK9Bbc8z' >

                  
                  <button className='btn btn-primary' onClick={(e)=>smsfunc(e)}>Pay Now</button>

            </StripeCheckout> 
         
                            </div>
                           
 
                            
                       </div>
 
                 </div>
 
             )}
         
         </div>
     )
 }
 
 export default BookingRoom;