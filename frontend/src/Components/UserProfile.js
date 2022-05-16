
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import { Tag, Divider } from "antd";

const { TabPane } = Tabs;

const user = JSON.parse(localStorage.getItem('currentUser'))

function UserProfile() {
    return (
      <div className="mt-5 ml-3">
        <Tabs defaultActiveKey="1">
          <button className='btn btn-danger'  tab="My Account" key="1">
           <div className="row">
             <div className="col-md-6 bs m-2 p-3">
             <h4>my Name : {user.name}</h4>
            <h4>my Email : {user.email}</h4>
         
           
             </div>
           </div>
          </button>
          <TabPane tab="Bookings" key="2">
          <h1>
            <MyReservation />
          </h1>
        </TabPane>

        </Tabs>
    
      </div>
    );
  }

  export default UserProfile;


  export const MyReservation = () => {
    const [mybookings, setmybookings] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);
    useEffect(async () => {

        try {
            setloading(true);
            const data = await (
              await axios.post("http://localhost:5000/api/bookings/getuserbookings", {
                userid: JSON.parse(localStorage.getItem("currentUser"))._id,
              })
            ).data;
            setmybookings(data);
            setloading(false);
          } catch (error) {
            setloading(false);
            seterror(true);
          }

        }, []);

        async function cancelBooking(bookingid , roomid){
      
          
          try {

            setloading(true);
            const result = await axios.post('http://localhost:5000/api/bookings/cancelbooking' , {bookingid:bookingid , userid:user._id , roomid:roomid});
            setloading(false);
            Swal.fire('Congrats' , 'Your Room has cancelled succeessfully' , 'success').then(result=>{
              window.location.href='/profile'
          })
          } catch (error) {
            Swal.fire('Congrats' , 'Your Room has cancelled succeessfully' , 'success').then(result=>{
              window.location.href='/profile'
          })
            setloading(false)
          }
      
        }

        return (
            <div>
              {loading ? (
                <Loader />
              ) : error ? (
                <Error />
              ) : (
                mybookings.map(booking=>{
                  return <div className="row">
                  <div className="col-md-6 my-auto">
                    <div className='bs m-1 p-2'>
                      <h4>{booking.room}</h4>
                 
                      <h6>TransactionId : {booking.transactionId}</h6>
                      <h6><b>Check In : </b>{booking.fromdate}</h6>
                      <h6><b>Check Out : </b>{booking.todate}</h6>
                      <h6><b>Amount : </b> {booking.totalAmount}</h6>
                      <h6><b>Status</b> : {booking.status =='booked' ? (<Tag color="green">Confirmed</Tag>) : (<Tag color="red">Cancelled</Tag>)}</h6>
                      <div className='text-right'>
                      {booking.status=='booked' && (<button className='btn btn-primary' onClick={()=>cancelBooking(booking._id , booking.roomid)}>Cancel Reservations</button>)}
                      </div>
                    </div>
                  </div>
                </div>
                })
              )}
            </div>
          );
        };
        