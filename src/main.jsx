import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Mian from './Components/Landing_Page/Mian_Component.jsx'
// import Login from './Components/Login_or_Ragistration/Registration.jsx'
import Registration from './Components/Login_or_Ragistration/Registration.jsx'
import Login from './Components/Login_or_Ragistration/Login.jsx'
import Profile from './Components/Profile/Profile.jsx'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Error from './Components/Error.jsx'

import Booking from './Components/Profile/Booking.jsx'
import History from './Components/Profile/History.jsx'
import ProfilePage from './Components/Profile/Profile_page.jsx'
import HotelDetails from './Components/Hotel_Details/hotelDeatils.jsx'
        

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' element={<Mian/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Ragistartion' element={<Registration/>}/>
    <Route path='/Profile/edit' element={<Profile/>}/>
    <Route path='/Profile' element={<ProfilePage/>}>
  <Route path='history' element={<History/>}/>
  <Route path='booking' element={<Booking/>}/>
    </Route>
    <Route path='*' element={<Error/>}/>
    <Route path='/hotel/details/:hotel_id' element={<HotelDetails/>}/>
  </Route>
  
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
