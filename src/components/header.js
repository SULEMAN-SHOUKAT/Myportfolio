import React,{Component} from 'react';
import banner from './resourses/img/banner/banner-image.png';
import background from './resourses/img/banner/home-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";
import "./resourses/css/bootstrap.min.css";
import "./resourses/css/all.min.css";
import "./resourses/vendor/Magnific-Popup/dist/magnific-popup.css";
import "./resourses/css/style.css";
import "./resourses/css/responsive.css";

import 'bootstrap';
class Header extends Component {
 


  render(){
    return(

      <section className="site-banner" id="home" style={{background:`url(${background}) no-repeat 0% 25%`}}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-12 site-title"style={{marginTop:"11rem"}}>
                      <h3 className="title-text" style={{fontWeight:"400"}}>Hey -------</h3>
                      <h1 className="title-text text-uppercase" style={{fontSize:"76px",fontFamily:"Comic Sans MS"}}>I am Suleman</h1>
                      <h4 className="title-text text-uppercase" style={{fontWeight:"400"}} >React js Developer</h4>
                      <div className="site-buttons">
                          <div className="d-flex flex-row flex-wrap">
                              <a  href="#contact" type="button" className="btn button primary-button mr-4 text-uppercase">hire
                                  me</a>
                              <a href="https://drive.google.com/open?id=1zeF3pKXy3OMrzZN3SO_MoUWl4w6EOuLm" rel="noopener noreferrer"   target="_blank" type="button" className="btn button secondary-button text-uppercase">Get cv</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12 banner-image" style={{marginTop:"7rem"}}>
                      <img src={banner}alt="banner-img" className="img-fluid"/>
                  </div>
              </div>
          </div>
      </section>

    );







  }
}

export default Header;
