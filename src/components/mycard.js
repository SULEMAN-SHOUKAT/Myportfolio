import React,{Component} from 'react';

import {Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";

import NavigationBar from './Navigation.js';
class Mycard extends Component {




  render(){


    return(

    


<div className="card_popup" id="card">
<NavigationBar call="contact" color="light"/>
<div className="center">

<div className="card">
<div className="additional">
<div className="user-card">
<div className="level center">
  Software Engineer
</div>
<div className="points center">
  Web Developer
</div>
<img width="110" height="110" viewBox="0 0 250 250" alt="salman" src={require("./resourses/mypic.jpg")} style={{borderRadius:"60px"}} className="center"/>

</div>
<div className="more-info">
<h1>Suleman Shoukat</h1>
<div className="coords">
  <span>Email:</span>
  <span>sulemanshoukaat@gmail.com</span>
</div>
<div className="phone_number">
<span>Phone:</span>
<span>+923414175106</span>
</div>
<div className="stats">
  <div>
    <div className="title">City</div>
    <i className="fa fa-globe"></i>
    <div className="value">Gujrat</div>
  </div>
  <div>
    <div className="title">Zip Code</div>
    <i className="fa fa-location-arrow "></i>
    <div className="value">50700</div>
  </div>
  <div>
    <div className="title">Country</div>
    <i className="fa fa-flag"></i>
    <div className="value">Pakistan</div>
  </div>
  <div>
    <div className="title">Availability</div>
    <i className="fa fa-clock"></i>
    <div className="value infinity" style={{fontSize:"20px"}}>∞</div>
  </div>
</div>
</div>
</div>
<div className="general">
<h1 >SULEMAN</h1>
<p>A software engineer  who is seeking to find the opportunity to work in a fun and challenging working environment that will encourage me to improve and learn.  </p>
<Alert variant='primary' className="more" >Mouse over the card for info</Alert>
</div>
</div>

<a href="#contact" className="profile-card__button pro_btn button--orange" style={{textDecoration:"none",color:"white"}}> Back</a>
</div>

</div>





          



       );







  }

}

export default Mycard;
