import React, { useState} from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'
import Navbar from "./Navbar";

const Header = () =>{


    return (
<div  id="main">
<Navbar/>
<div className="name">
 <h1><span>Olivia Benson Swift
</span>is a Scottish fold cat</h1>
 <p className="detail">In June of 2014, Taylor got a new cat she named Olivia Benson after the character portrayed by Mariska Hargitay on Law & Order: SVU, one of Taylor's favorite television
 shows. </p>
 <a href="#" className="cv-btn">Download CV</a>
</div>
</div>
    )
    }
export default Header;