import React,{Component} from 'react';
import logo from './resourses/logo_rotate.png';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";
import { Link,Scroll } from "react-scroll";
import Profilebar from './profilebar.js'
class NavigationBar extends Component {
 
 menu=()=>{
   if(this.props.call==="services"){
    
     return(
       
      <Profilebar goto="#services"/>
     );
   }
   else if (this.props.call==="contact") {
     return(
          <Profilebar goto="#home"/>
     );
   }
  
   else{
     return(
       <>
       <Link to="site-banner" href="#" spy={true}  smooth={true}    offset={-70}   duration= {500}  className="navigation-link"  style={{fontWeight:"400",fontFamily:"Comic Sans MS",color:"black"}} >Home</Link>
       <Link to="about-area" href="#"  spy={true} smooth={true}    offset={-70}   duration= {500} className="navigation-link "   style={{fontWeight:"400",fontFamily:"Comic Sans MS",color:"black"}}>About</Link>
       <Link href="#" to="services-area" spy={true}  smooth={true}    offset={-70}   duration= {500} className="navigation-link " style={{fontWeight:"400",fontFamily:"Comic Sans MS",color:"black"}}>Services</Link>
       <Link href="#" to="client"  spy={true}  smooth={true}    offset={-70}   duration= {800} className="navigation-link "  style={{fontWeight:"400",fontFamily:"Comic Sans MS",color:"black"}}>Client Dealing</Link>
       </>
     );
   }
 }


  render(){


    return(

      <Navbar bg={this.props.color? this.props.color:"none"} expand="lg" fixed="top">
      
        <Link to="site-banner" spy={true}  smooth={true}  style={{cursor:"pointer"}}  offset={-70}   duration= {500}>
      <img
       alt=""
       src={logo}
      style={{width:"30px",height:"30px"}}
       className="d-inline-block align-top App-logo w-20 h-20"
       onClick={()=>Scroll.scrollToTop()}
     />
     <h6 style={{display:"inline-block",fontSize:"24px",fontWeight:"300",color:"black"}}>SULEMAN</h6> </Link>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />


    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Nav className="mr-auto space-between">
     <this.menu/>

    </Nav>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>

);







  }

}

export default NavigationBar;
