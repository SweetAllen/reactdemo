import React, { useState} from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'

const Navbar = () =>{

    const [nav,setnav] =useState(false)
    const changebackground = () =>{
        if(window.scrollY >=50){
            setnav(true)
        }else{
            setnav(false)
        }
    }
    window.addEventListener('scroll', changebackground);
    return (
<>
   <nav className={nav ? 'nav active': 'nav'}>
        <a href="#" className="logo">
          <img src={logo}>
          </img>
        </a>
        <input type='checkbox' className="menu-btn" id="menu-btn" />
            <label className="menu-icon" for='menu-btn'>
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
             <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
    <li><a href="#">Blog</a></li>
<li><a href="#">Contact Me</a></li>




            </ul>
   </nav>
</>
    )
    }
export default Navbar;