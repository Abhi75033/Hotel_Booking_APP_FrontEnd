import { ParkOutlined, ParkRounded, Wifi } from "@mui/icons-material";
import axios from "axios";
import '../../App.css'
import { useEffect, useState } from "react";
import { FaSwimmingPool } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io";
import { useParams } from "react-router-dom";

// MUI imports
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';



// float Mui
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

function HotelDetails() {
 const {hotel_id} = useParams()
 const [hotels,setHotel]=useState({})
 const [images,setImages]=useState([])
 
 const getHotelById=async()=>{
    try {
        const resp = await axios.get(`http://localhost:3000/api/v1/hotels/${hotel_id}`)
        setHotel(resp.data.data.hotels)
        setImages(resp.data.data.hotels.image)
        
    } catch (error) {
        console.log(error);
    }
 }

 useEffect(()=>{
getHotelById()
 },[])
    return ( 
    <div className="container-fluid resp-details">
        <div className="float-icon">

<Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" className="bg-danger text-light ">
        Book Now
      </Fab>
    </Box>

</div>
        <div id="carouselExample"  className="carousel w-100 rounded-4 bg-dark slide  ">
  <div className="carousel-inner w-50 p-3 d-block m-auto">
    <div className="carousel-item active">
      <img src={images[0]} className="d-block w-100 rounded-3"   alt="..."/>
    </div>
   {
        images.slice(1).map(item=>(   
    <div key={images.indexOf(item)} className="carousel-item">
    <img src={item} className="d-block w-100" alt="..."/>
    </div>
        ))
   }
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h4 className="mt-4">{hotels.Hotel_Name}</h4>
<p>{hotels.city},{hotels.Country}</p>
<hr className="w-75"/>

<h3>About Property</h3>

<p className=" fw-medium">{hotels.description}</p>
<hr className="w-50"/>

<div className="row-cols-auto">

<div className="col">
<div className="d-flex align-items-center gap-2">
<IoLogoNoSmoking className="fs-3 text-danger"/><h5 className="mt-2">No Smoking Zone</h5>
</div>
<div className="d-flex align-items-center gap-2 mt-1">
    <ParkRounded className="text-success fs-3"/><h5 className="mt-2">Park</h5>
</div>
<div className="d-flex align-items-center gap-2 mt-1">
    <Wifi className="text-primary fs-3"/><h5 className="mt-2"> Fast wifi</h5>
</div>
<div className="d-flex align-items-center gap-2 mt-1">
    <FaSwimmingPool className="text-primary fs-3"/><h5 className="mt-2">Swiming Pool</h5>
</div>

</div>
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
      </DemoContainer>
    </LocalizationProvider>


</div>
<hr/>
{/* last div */}
<div className="mt-2 responsive_map">
<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361344906!2d-74.30933841841593!3d40.69753995216038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1716382149573!5m2!1sen!2sin" 
width="600" height="450" 
 allowFullScreen=""
  loading="lazy"
referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>

</div>
);
}

export default HotelDetails;