import React, { Component } from 'react';
import "./Nav.css"
import logo from "../Assets/images/logo.svg"
import Navbtn from '../Common/Navbtn';
const Nav = () => {
    return ( 
                <header>
            <nav>
                <img src={logo} alt="logo"/>
                <ul>
                 <Navbtn title="About Us"/>
                 <Navbtn title="Investor Relations"/>
                 <Navbtn title="Responsible Banking"/>
                 <Navbtn title="Newsroom"/>
                 <Navbtn title="Learning Center"/>
                 <Navbtn title="Careers"/>
                 <Navbtn title="Others"/>
                </ul>
            </nav>
        </header>
     );
}
 
export default Nav;