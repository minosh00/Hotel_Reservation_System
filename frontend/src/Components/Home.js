import React from 'react';
import Map from './Map';
import DisplayAllRoomCustomer from './DisplayAllRoomCustomer';
const Home = ()=>(
   
    <div className="container">
        <br></br><br></br>
      <div   style={{ marginRight: '100px'}} >
   
      <h1 class="display-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome &nbsp;&nbsp;to&nbsp;&nbsp;Lanka &nbsp;&nbsp;Hotels</h1>
      <blockquote class="blockquote text-center">
  <p class="mb-0">Boasting spectacular ocean view from every guest room, The Ocean Colombo features modern and comfortable accommodation along Marine Drive..</p>
  <footer class="blockquote-footer">The Ocean  <cite title="Source Title">Colombo </cite></footer>
</blockquote>
        
          </div> 

<DisplayAllRoomCustomer/>



   <Map/>
   <br></br><br></br>
    </div>
)

export default Home;
