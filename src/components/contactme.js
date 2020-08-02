import React,{Component} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";

import NavigationBar from './Navigation.js';

class Contactme extends Component {




  render(){


    return(

          <div className="contact_popup" id="contact">
          <NavigationBar call="contact" color="light"/>
         
           

           <div className="wrapper" id="profile_card">

  
  <div className="profile-card js-profile-card">
    <div className="profile-card__img">
      <img src={require("./resourses/mypic.jpg")}alt="profile card"/>
    </div>

    <div className="profile-card__cnt js-profile-cnt">
      <div className="profile-card__name">SULEMAN SHOUKAT</div>
      <div className="profile-card__txt">salmanshoukaat@ <strong>gmail.com</strong></div>
      <div className="profile-card-loc">
        <span className="profile-card-loc__icon">
          <svg className="icon">
            <use xlinkHref="#icon-location"></use>
          </svg>
        </span>

        <span className="profile-card-loc__txt">
          Pakistan, Punjab
        </span>
      </div>

      <div className="profile-card-inf">
        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">Gujrat</div>
          <div className="profile-card-inf__txt">City</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">50700</div>
          <div className="profile-card-inf__txt">Zip Code</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">Developer</div>
          <div className="profile-card-inf__txt">Role</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">Web</div>
          <div className="profile-card-inf__txt">Area</div>
        </div>
        
      </div>
      
      <div className="profile-card-social">
      <div className="profile-card-ctr">
        <a href="#card" className="profile-card__button button--blue js-message-btn" style={{textDecoration:"none",color:"white"}}>My Card</a>
      
      </div>
      
    </div>
      </div>

      

    

  </div>

</div>



           </div>









          



       );







  }

}

export default Contactme;
