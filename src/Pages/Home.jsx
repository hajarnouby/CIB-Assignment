import React, { Component } from 'react';
import "./Home.css"
import "../Components/Nav"
import Nav from '../Components/Nav';
import Button from '../Common/Button';
import bghome from "../Assets/images/bannerbg.svg"
const Home = () => {
    return ( 
        <body>
            <Nav/>
<div className='div1'>
        <img className='img1' src={bghome} alt="bg"/>
    <div className='div2'>
        <h3 className='sp1'>CIB</h3>
        <p className='sp1'>Delivering value to our clients, our <br />
        community and our shareholders
        </p>
        <Button title="Discover More"/>
    </div>
</div>
{/* section 2 */}

<div className='div3'>
    
</div>




        </body>

     );
}
 
export default Home;