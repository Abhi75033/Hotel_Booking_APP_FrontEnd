import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
function HotelList() {
  
    const [hotel,setHotel]=useState([])

    const getHotel = async ()=>{
        try {
            const resp = await axios.get('http://localhost:3000/api/v1/hotels/hotels')
            console.log(resp.data.data.hotels);
            setHotel(resp.data.data.hotels)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getHotel()
    },[])


    return ( 
  <div className='container-fluid'>
      <div className="row row-cols-auto">
        {
            hotel.map(item=>(
               <div className="col container-fluid mt-3">
                
                <div class="card" style={{width: "18rem"}}>
  <Link to={`/hotel/details/${item._id}`}>
    <img src={item.image[0]} height={250} class="card-img-top" alt="..."/></Link> 
   <div class="card-body">
    <h5 class="card-title">{item.Hotel_Name}</h5>
    <p class="card-text">{item.city}</p>
   
    <p className="card-text fw-bold">₹{item.Price} per guest</p>
   
  </div>

</div>


               </div>
            ))
        }
</div> 
<div className="d-flex justify-content-center " spacing={2}>
      <Pagination className="d-block text-center pt-4" count={15} />
    </div>
  </div>
    );
}

export default HotelList;