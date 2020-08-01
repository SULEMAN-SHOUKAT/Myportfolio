import React,{Component} from 'react';
import banner from './resourses/img/banner/banner-image.png';
import background from './resourses/img/banner/home-banner.png';
import intro_wbm from './resourses/intro.webm';
import intro_mp4 from './resourses/intro.mp4';
import loop_wbm from './resourses/loop.webm';
import loop_mp4 from './resourses/loop.mp4';
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

      <section className="site-banner" id="home">
             <div class="video-background prllx">
        <div class="home_intro_videos">
           <video class="intro" muted autoPlay loop>
           <source src={intro_wbm} type="video/webm"/>
                <source src={intro_mp4} type="video/mp4"/> </video>
       
        <video class="intro-loop" muted autoPlay loop>
              <source src={loop_wbm} type="video/webm"/>
                <source src={loop_mp4} type="video/mp4"/> 
            </video>
        </div>
    </div>
          <div className="container">
          
                
           
              <div className="row">
                  <div className="col-lg-6 col-md-12 site-title mr-20"style={{marginTop:"14rem"}}>
                      <h3 className="title-text" style={{fontWeight:"400",color:'white'}}>Hey -------</h3>
                      <h1 className="title-text text-uppercase" style={{fontSize:"76px",fontFamily:"Comic Sans MS",color:'white'}}>I am Suleman</h1>
                      <h4 className="title-text text-uppercase" style={{fontWeight:"400",color:'white'}} >React js Developer</h4>
                      <div className="site-buttons">
                          <div className="d-flex flex-row flex-wrap">
                              <a  href="#contact" type="button" className="btn button primary-button mr-4 text-uppercase">hire
                                  me</a>
                              <a href="https://drive.google.com/open?id=1zeF3pKXy3OMrzZN3SO_MoUWl4w6EOuLm" rel="noopener noreferrer"   target="_blank" type="button" className="btn button secondary-button text-uppercase">Get cv</a>
                          </div>
                      </div>
                  </div>
                 
              </div>
          </div>
      </section>

    );







  }
}

export default Header;
