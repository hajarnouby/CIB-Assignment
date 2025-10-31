import React, { Component } from 'react';
import "./Card.css"
import card1 from "../Assets/icons/card1.svg"
const Card = (props) => {
    return ( 
        <div className='card'>
            <img src={card1} alt="card1" />
            <h3 className='txt1'>{props.title}</h3>
        </div>
     );
}
 
export default Card;