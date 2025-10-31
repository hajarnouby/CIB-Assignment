import React, { Component } from 'react';
import "./News.css";
import img1 from "../Assets/images/newsim.svg";
const News = (props) => {
    return ( 
        <div className='row page news'>
            <img src={img1} alt="image"/>
            <div className='info'>
                <p className='p3'>{props.value}</p>
                <h4 className='txt2 txt3'>{props.title}</h4>
                <p className='p3'>{props.placeholder}</p>
            </div>
        </div>
     );
}
 
export default News;