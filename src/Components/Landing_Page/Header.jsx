import logo from "../../assets/Airbnb.png";
import "../../../src/App.css";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Home, Login, Logout } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LuggageIcon from "@mui/icons-material/Luggage";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { useMyContext } from "../Utils/ContextProvider";
import profileimg from "../../assets/ProfileImage.jpg";
import { Button } from "bootstrap";
import { Skeleton } from "@mui/material";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// import Sidebar from './Sidebar';
// import Sidebars from './Sidebar';
function Header() {
  const [name, setName] = useState("Traveller");
  const { data, setData, login, setLogin } = useMyContext();
  const json = localStorage.getItem("user");
  const user = JSON.parse(json);

  const handleLogout=()=>{
    localStorage.clear()
  }

  return (
    <div className=" d-flex align-items-center justify-content-between  h-50 w-100    p-4">
      <NavLink to="/">
        <div className="d-inline-flex">
          <img src={logo} height="40" width="40" />
          <a href="#" className="text-decoration-none a1 ms-2 fs-3 fw-bolder">
            airbnb
          </a>
        </div>
      </NavLink>

      <div className="resp_header  ms-5">
        <a className=" text-decoration-none a2 fs-5">Stays</a>
        <a className="ms-3 text-decoration-none a2 fs-5">Expreriences</a>
        <a className="ms-3 text-decoration-none a2 fs-5">Online Expreriences</a>
      </div>
      <div className="d-flex align-items-center">
        <a className=" text-decoration-none a2 dnone fs-5">Airbnb your home</a>
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
            <Avatar
              src={user ? user.avatar : profileimg}
              sx={{ width: 30, height: 30 }}
              className="ms-2"
            />
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
                <WavingHandIcon className="text-danger" /> &nbsp;Hello &nbsp;
                {user ? user.name : name}
                <hr className="w-75 text-info " />
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
                <li>
                  <NavLink className="text-decoration-none" to="/">
                    <span className="d-flex align-content-center fs-5  gap-2">
                      <Home className="fs-2 text-dark" /> Home
                    </span>
                  </NavLink>
                </li>
               
                { user && 
                <li className="mt-4 text-dec">
                 <hr className="w-75 text-danger " />
                  <NavLink className="text-decoration-none" to="/profile">
                    <span className="d-flex align-content-center fs-5 gap-2">
                      <PersonIcon className="fs-2 text-dark" /> Profile
                    </span>
                  </NavLink>
                </li>}
                <hr className="w-75 text-danger " />
                <li className="mt-4">
                  <span className="d-flex align-content-center fs-5 gap-2">
                    <LuggageIcon className="fs-2" />
                    My Bookings
                  </span>
                </li>
                <hr className="w-75 text-danger " />

                <li className="mt-4">
                  { user?
                    <NavLink className="text-decoration-none" to="/login">
                    <span className="d-flex align-content-center fs-5 gap-2">
                      <Logout className="fs-2 text-dark" />
                      <button onClick={handleLogout} className=" border-0 bg-transparent">Logout</button>
                    </span>
                  </NavLink>
                  :  <NavLink className="text-decoration-none" to="/login">
                  <span className="d-flex align-content-center fs-5 gap-2">
                    <Login className="fs-2 text-dark" />
                    Login
                  </span>
                </NavLink>
                  }
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
