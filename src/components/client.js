import React,{Component} from 'react';

import {Navbar,Container,Col,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";
import "./resourses/css/bootstrap.min.css";
import "./resourses/css/all.min.css";
import "./resourses/vendor/Magnific-Popup/dist/magnific-popup.css";
import "./resourses/css/style.css";
import "./resourses/css/responsive.css";
import "./resourses/client.css"
import 'bootstrap';
import {Scroll } from "react-scroll";
class Client extends Component {
 


  render(){
    return(

      <section className="about-area client" id="client">
          <div className="container" >
          <Container style={{marginTop:"11rem"}}>
          <Row className="client_row">
          <Col>
              <div className="row text-center" >
                  <div className="col-12 ">
                      <div className="about-title ">
                          <h1 className="text-uppercase title-h1 row_3">Customer Saticfaction</h1>
                          <p className=" client_p" style={{color:"rgba(0,0,0,0.8)"}}>
                            We constantly regarded customer satisfaction as a target. It is our main business
                            target to detect what our customers expect from us and services
                             by always following the changes in customer values and behaviours systematically, and fulfil these expectations unconditionally.
                          </p>
                          <p className=" client_p" style={{color:"rgba(0,0,0,0.8)"}}>
                            we involve the customer with us a team member of the project so that customer will know what axactly is going on,
                            what we are going to develope and what needs to be changed at run time of development.

                          </p>
                          
                      </div>
                  </div>
              </div>



              </Col>

                <Col style={{alignItems:"center",marginTop:"-5rem"}}>

                  <div className="client row client_imgs" >
                 
                  <div className="tariffCards">
    <div className="economy">
    <Navbar.Brand href="#home"  style={{color:"white"}}>
      <img
       alt=""
       src={require("./resourses/logo_rotate.png")}
      style={{width:"30px",height:"30px",marginTop:"2px"}}
       className="d-inline-block align-top App-logo w-20 h-20"
       onClick={()=>Scroll.scrollToTop()}
     />
     SULEMAN
     </Navbar.Brand>
      <h3>Understanding</h3>
      <span>Put ourself in customer shoes</span>
    </div>
    <div className="premiumeconomy">
    <Navbar.Brand href="#home"  style={{color:"white"}}>
      <img
       alt=""
       src={require("./resourses/logo_rotate.png")}
      style={{width:"30px",height:"30px",marginTop:"2px"}}
       className="d-inline-block align-top App-logo w-20 h-20"
       onClick={()=>Scroll.scrollToTop()}
     />
     SULEMAN
     </Navbar.Brand>
      <h3>Solution</h3>
      <span>Ease our customers’ pain</span>
    </div>
    <div className="business">
    <Navbar.Brand href="#home"  style={{color:"white"}}>
      <img
       alt=""
       src={require("./resourses/logo_rotate.png")}
      style={{width:"30px",height:"30px",marginTop:"2px"}}
       className="d-inline-block align-top App-logo w-20 h-20"
       onClick={()=>Scroll.scrollToTop()}
     />
     SULEMAN
     </Navbar.Brand> 
      <h3>Involvement</h3>
      <span>Brain storming With customer</span>
    </div>
    <div className="first">
    <Navbar.Brand href="#home"  style={{color:"white"}}>
      <img
       alt=""
       src={require("./resourses/logo_rotate.png")}
      style={{width:"30px",height:"30px",marginTop:"2px"}}
       className="d-inline-block align-top App-logo w-20 h-20"
       onClick={()=>Scroll.scrollToTop()}
     />
     SULEMAN
     </Navbar.Brand>
      <h3>Acceptence</h3>
      <span>Test and the accept the product</span>
    </div>
  </div>




          </div>
          </Col>
          </Row>
          </Container>
          </div>

      </section>
    );







  }
}

export default Client;
