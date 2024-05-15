import logo from "../../assets/Airbnb.png";
import "../../../src/App.css";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Home } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import WavingHandIcon from '@mui/icons-material/WavingHand';
// import Sidebar from './Sidebar';
// import Sidebars from './Sidebar';
function Header() {
    const [name,setName]=useState('Traveller')
  return (
    <div className=" h-50 w-100  d-flex align-items-center justify-content-between  p-4">
      <NavLink to="/">
        <div className="d-inline-flex">
          <img src={logo} height="40" width="40" />
          <a href="#" className="text-decoration-none a1 ms-2 fs-3 fw-bolder">
            airbnb
          </a>
        </div>
      </NavLink>

      <div className="d-flex align-items-center ms-5">
        <a className=" text-decoration-none a2 fs-5">Stays</a>
        <a className="ms-3 text-decoration-none a2 fs-5">Expreriences</a>
        <a className="ms-3 text-decoration-none a2 fs-5">Online Expreriences</a>
      </div>
      <div className="d-flex align-items-center">
        <a className=" text-decoration-none a2 fs-5">Airbnb your home</a>
        <a className="ms-4 a2  fs-6">
          <LanguageIcon fontSize="small" />
        </a>
        <div id="br" className=" ms-3 ">
          <button 
            className="btn border-0 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <Avatar sx={{ width: 30, height: 30 }} className="ms-2" />
          </button>

          <div
            className="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            tabindex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="staticBackdropLabel">
               <WavingHandIcon className="text-danger"/> &nbsp;Hello {name}
               <hr className="w-75 text-info "/>
              
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
             <ul className="list-unstyled">
                <li >
                  <NavLink className='text-decoration-none' to='/'>
                  <span className="d-flex align-content-center fs-5  gap-2"> <Home className="fs-2"/> Home</span>
                  </NavLink>
                </li>
                <hr className="w-75 text-danger "/>
                <li className="mt-4">
                <span className="d-flex align-content-center fs-5 gap-2"><PersonIcon className="fs-2"/> Profile</span>
                </li >
                <hr className="w-75 text-danger "/>
                <li className="mt-4">
                <span className="d-flex align-content-center fs-5 gap-2"><LuggageIcon className="fs-2"/> Bookings</span>
                </li>
                <hr className="w-75 text-danger "/>
                <li className="mt-4">
                   Your Profile
                </li>
             </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
