import React, { Component } from 'react';
import "./Navbtn.css"
const Navbtn = (props) => {
    return (  
                <li>
            {props.title}
        </li>
    );
}
 
export default Navbtn;