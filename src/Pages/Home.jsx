import React, { Component } from 'react';
import "./Home.css"
import "../Components/Nav"
import Nav from '../Components/Nav';
import Button from '../Common/Button';
import bghome from "../Assets/images/bannerbg.svg"
import Small from '../Common/Minimenu';
import Sub from '../Common/Subtitle';
import Title from '../Common/Sectiontitle';
import Card from '../Common/Card';
import Center from '../Common/Centercard';
import News from '../Common/News';
import men from "../Assets/images/men.svg"
import logo from "../Assets/images/logo.svg"
import Word from '../Common/Footerlink';
import fbg from "../Assets/images/footerbg.svg"
import play from "../Assets/images/play.svg"
import app from "../Assets/images/app.svg"
const Home = () => {
    return ( 
        <body>
            <Nav/>
<div className='div1'>
        <img className='img1' src={bghome} alt="bg"/>
    <div className='div2'>
        <h3 className='sp1'>CIB</h3>
        <p className='sp1 wh'>Delivering value to our clients, our <br />
        community and our shareholders
        </p>
        <Button title="Discover More"/>

    </div>
</div>
{/* section 2 */}

<div className='page div3'>
            <Small title="Apply Onine"/>
        <Small title="News"/>
        <Small title="Blog Articles"/>
        <Small title="CIB International"/>
        <Small title="Sustainable Finance"/>
        <Small title="Awards"/>

</div>
{/* three */}
<div className='div4'>
 <Sub title="APPLY ONLINE"/>
<Title title="Apply online now for cards and loans with ease!"/>
</div>
<div className='div4 row div5 sp2'>
        <Card title="Apply for a New Account"/>
        <Card title="Apply for a card"/>
        <Card title="Apply for a loan or overdraft"/>
</div>
{/* four */}
<div className='div4'>
        <Title title="Learning Center"/>
        <h4>Learn more about banking and your finances</h4>
</div>
<div className='div4 row div5 sp2'>
        <Center value="Buying a home can be an emotional process, but it&;s important to approach it logically" title="Buying and making a home"/>
        <Center value="So for all of you travelers, take a vacation without import Foot from './../Common/Footerlink';
spending a fortune with these helpful  tips and tricks:" title="Traveling on a budget"/>
        <Center value="The impact of a good education can be transformative." title="University life tips"/>
</div>

{/* five */}
<div className='div4 sp1 page'>
        <Title title="News"/>
        <div className='div4 ce'>
        <News title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"  value="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"    placeholder="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance,valued at EGP 3.4 billion. "/>
        <News title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"  value="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"    placeholder="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance,valued at EGP 3.4 billion. "/>
        <News title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"  value="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"    placeholder="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance,valued at EGP 3.4 billion. "/>

        </div>

</div>

{/* five */}
{/* <div className='aa'>
        <img src={men} alt="men shaking hands" />
        <div className='bb'>
            

        </div>

</div> */}

{/* footer */}
<footer>
        <img className='img1 img3' src={fbg} alt="footer bg" />
    <div className='one sp4'>
    <img src={logo} alt="logo" />
    </div>
    <div className='col sp4'>
    <Word title="FAQ"/>
    <Word title="Learning Center"/>
    <Word title="Fees & Charges"/>
    <Word title="Terms & Conditions"/>

    </div>
    <div className='col sp4'>
    <Word title="Local"/>
    <Word title="Abroad"/>
    <Word title="Business"/>
    <Word title="Corporate"/>

    </div>
    <div className='col sp4'>
    <Word title="Careers"/>
    <Word title="Why CIB?"/>
    <Word title="Email us"/>
    <Word title="System Status"/>
    </div>
    <div className='row'>
    <img className='img' src={play} alt="playstore" />
    <img className='img' src={app} alt="app store" />
    </div>
</footer>
<div className='last'>
    <p className='p90'>Copyright © 2025 Commercial International Bank</p>
</div>








</body>

     );
}
 
export default Home;