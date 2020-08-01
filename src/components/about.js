import React,{Component} from 'react';
import aboutus from './resourses/img/about-us.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";
import "./resourses/css/bootstrap.min.css";
import "./resourses/css/all.min.css";
import "./resourses/vendor/Magnific-Popup/dist/magnific-popup.css";
import "./resourses/css/style.css";
import "./resourses/css/responsive.css";
import 'bootstrap';
class About extends Component {
 


  render(){
    return(
      <section className="about-area" id="about" style={{marginTop:"5rem"}}>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="about-image">
                          <img src={aboutus} alt="About us" className="img-fluid"/>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12 about-title">
                      <h2 className="text-uppercase pt-5 para_1" style={{fontSize:"3rem", fontFamily: "Comic Sans MS",letterSpacing:"14px",fontWeight:"600"}}>
                          <span>Let me</span>
                      </h2>
                      <h2 className="text-uppercase pt-5 para_1" style={{fontSize:"3rem",marginTop:"-3rem",fontFamily: "Comic Sans MS", letterSpacing:"14px",fontWeight:"600"}}>
                          <span>introduce</span>
                      </h2>
                      <h2 className="text-uppercase pt-5 para_1" style={{fontSize:"3rem",marginTop:"-3rem",fontFamily: "Comic Sans MS", letterSpacing:"14px",fontWeight:"600"}}>
                          <span>myself</span>
                      </h2>
                      <div className="paragraph py-4  width_about_para">
                          <p className="para para_1">
                              A software engineering under graduate who is seeking to find the opportunity to work in a fun and challenging working environment.
                          </p>
                          <p className="para para_1">
                             That will encourage me to improve and learn new and necessary skills as well as be motivated by the company to do my best for the sake of helping myself and the company advance in the software engineering industry.
                          </p>
                      </div>
                      <a href="#Myinfo" rel="noopener noreferrer"  type="button" className="btn button primary-button text-uppercase aboout_btn">Learn More</a>
                  </div>
              </div>
          </div>
      </section>

    );







  }
}

export default About;
