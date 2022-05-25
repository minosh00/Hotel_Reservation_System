import React, { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

import axios from "axios";
import Loader from "../Components/Loader";
import Room from "../Components/DisplayAllRooms";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;
function Home() {

  const [reservation, setreservation] = useState([]);
  const [hotels, sethotels] = useState([]);
  const [fromdate, setfromdate] = useState('');
  const [todate, settodate] = useState('')
  const [loading, setloading] = useState(false);
  const [searchkey, setsearchkey] = useState('')
  const[type , settype]=useState('all')
  
  function filterByDate(dates) {
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))
    
    var temp=[]
    for (var room of hotels) {
      var availability = false;
      
      for (var booking of room.currentbookings) {
        
        if(room.currentbookings.length)
        {
          if (
            !moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate) &&
            !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
          ) {
            if (
              moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
            ) {
              availability = true;
            }
          }
        }
        
        
      }
      if(availability || room.currentbookings.length==0) 
      {
        temp.push(room)
      }
      setreservation(temp)
    }
    
  }

  useEffect(async () => {
    try {
      setloading(true);
      const rooms = await (await axios.get("http://localhost:5000/api/rooms/getAllRooms")).data;
      console.log(rooms);
      setreservation(rooms);
      sethotels(rooms)
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

  function filterBySearch()
  {
    const dupdate = hotels.filter(room=>room.name.toLowerCase().includes(searchkey))
    setreservation(dupdate)
  }

  function filterByType(e)
  {
    settype(e)
    if(e!=='all'){
      const dupdate = hotels.filter(room=>room.type.toLowerCase().includes(e.toLowerCase()))
      setreservation(dupdate)
    }
    else{
        setreservation(hotels)
    }
   
  }

  return (
    <div className="mt-5">
      <div className="container">
        <div className="row bs p-3 m-5">
          <div className="col-md-3"   >
            <RangePicker  id="datepicker" type="date" onChange={filterByDate} format='DD-MM-YYYY' className='m-2'/>
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control i2 m-2"
              placeholder='find Rooms'
              value={searchkey}
              onKeyUp={filterBySearch}
              onChange={(e)=>{setsearchkey(e.target.value)}}
            />
          </div>
          <div className="col-md-4">
            <select className="form-control m-2" value={type} onChange={(e)=>{filterByType(e.target.value)}} >

            <option value="all">All</option>
              <option value="delux">AC rooms</option>
              <option value="non-delux">Non AC Room</option>
              <option value="delux">Luxury Room</option>
              <option value="non-delux">Normal Room</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : (
            reservation.map((room) => {
            return (
              <div className="col-md-8" data-aos='zoom-in'>
                <Room room={room} fromdate={fromdate} todate={todate}/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
export default Home;


