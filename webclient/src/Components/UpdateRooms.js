import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



const UpdateRooms = props => { 

    const [name, setroom] = useState("");
    const [rentPerDay, setrentperday] = useState();
    const [description, setdescription] = useState("");
    const [phoneNumber, setphonenumber] = useState("");
    const [type, settype] = useState("");


    const changeOnClick = (f) => {
        //f.preventDefault();
    
        const updateroom = {
          name,
          rentPerDay,
          description,
          phoneNumber,
          type,
         
        };
    
        setroom("");
        setrentperday('');
        setdescription('');
        setphonenumber('');
        settype('');
    
        axios.put(`http://localhost:5000/api/rooms/update/${props.match.params.id}`, updateroom)
        .then (res =>
          alert("  Updated!")
          (res.data))
        .catch(err =>{
            console.log(err);
        });
     };

     useEffect(() => {
        axios.put(`http://localhost:5000/api/rooms/getRoombyid/${props.match.params.id}`)

        .then(res =>[
            setroom(res.data.name),
            setrentperday(res.data.rentPerDay),
            setdescription(res.data.description),
            setphonenumber(res.data.phoneNumber),
            settype(res.data.type),

        ])

        .catch(error =>console.log(error))
          
         },[]);

         return (
        
                 <div className="container">
                 <h1>Update rooms </h1>
                 
            
                 <form onSubmit={changeOnClick} encType="mltipart/form-data">
    
      <div class="mb-3">
        <label htmlFor="courseID" class="form-label">name room </label>
        <input type="" class="form-control" placeholder=""
          onChange={e => setroom(e.target.value)}
           value={name}
        />
      
      </div>
    
      <div class="mb-3">
        <label htmlFor="courseName" class="form-label">rent per day</label>
        <input type="" class="form-control" placeholder="" 
            onChange={e => setrentperday(e.target.value)}
            value={rentPerDay}/>
      </div>
    
      <div class="form-outline">
              
              <label htmlFor="courseType" class="form-label">description</label>
                  <input type=""  class="form-control" placeholder="" 
                    onChange={e => setdescription(e.target.value)}
                    value={description}
              
                      />
                </div>
    
     <div class="form-group">
        <label htmlFor="description">phone number</label>
        <textarea className="form-control"  rows="5"  
            onChange={e => setphonenumber(e.target.value)}
            value={phoneNumber}
            ></textarea>
      </div>
        
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
          
    <label htmlFor="requirement" class="form-label">type</label>
        <input type="text"   class="form-control" placeholder="" 
            onChange={e => settype(e.target.value)}
            value={type}
            />
        
      </div>
    </div>
   
  </div>




  
  <div className="container">
    <br></br>
  <button type="submit"  class="btn btn-success">Update 



   </button>
<br></br><br></br>
   <Link to="/Admin">
  
  <button type="button" class="btn btn-primary">
    back to admin
  </button>
</Link>
  </div>

</form>
<div align="right">
    <p></p>

</div >



</div>

)
}

export default UpdateRooms;