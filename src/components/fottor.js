import React,{Component} from 'react';
import logo from './resourses/logo_rotate.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";
import { Link,Scroll } from "react-scroll";

class Footer extends Component {
 
 


  render(){


    return(

        <footer className="footer-area">
        <div className="container">
            <div className="">
                <div className="site-logo text-center py-4">
                <Link to="site-banner" spy={true}  smooth={true}  style={{cursor:"pointer"}}  offset={-70}   duration= {500}>
      <img
       alt=""
       src={logo}
      style={{width:"30px",height:"30px"}}
       className="d-inline-block align-top App-logo w-20 h-20"
       onClick={()=>Scroll.scrollToTop()}
     />
     <h4>SULEMAN</h4> </Link>
                </div>
                <div className="social text-center">
                    <h5 className="text-uppercase">Follow me</h5>
                    <a href="https://www.facebook.com/alx.salman" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/suleman_chaudary/?hl=en" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/SULEMAN-SHOUKAT/Projects" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    
                </div>
                <div className="copyrights text-center">
                    <p className="para">
                        Copyright ©2019 All rights reserved  <a href="#" onClick={()=>this.Scroll.scrollToTop()}><span style={{color: "var(--primary-color)"}}>Suleman shoukat</span></a> 
                        
                    </p>
                </div>
            </div>
        </div>
    </footer>


);







  }

}

export default Footer;