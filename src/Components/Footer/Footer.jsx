import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import '../../../src/index.css'

function Footer() {
    return ( 
<div className="text-center mt-4 bg-black w-100 h-100 p-2 text-light">
    <h3>Airbnb.com</h3>
    <hr/>
    <ul >
        <li className="d-flex justify-content-between">
           <a>Home</a>
           <a>About</a>
           <a>Contact</a>
           <a className="me-4 text-decoration-none">Join Us</a>
        </li>
    </ul>
    <div className="mt-4">
    <Twitter className="cp"/>
    <Facebook className="ms-3 cp"/>
    <Instagram className="ms-3 cp"/>
    <LinkedIn className="ms-3 cp"/>
    <GitHub className="ms-3 cp" />
    </div>
    <hr/>
    <p>Airbnb&copy;2024 </p>
    </div>
     );
}

export default Footer;