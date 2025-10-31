import React, { Component } from 'react';
import "./Centercard.css"
import cen from "../Assets/images/imagecen.jpg"
const Center = (props) => {
    return ( 
        <div className='div4 col all'>
            <img src={cen} alt="image" />
        <div className='col cen'>
            <h4 className='txt2'>{props.title}</h4>
            <p>{props.value}</p>
            <p className='read'>Read More</p>
        </div>
        </div>
     );
}
 
export default Center;