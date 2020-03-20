import React,{Component} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";


class Profilebar extends Component {

 



  render(){
console.log(this.props.goto);


    return(

         
          
          <div >
          <div className="profile">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/764024/profile/profile-512.jpg" alt="profile-pic" className="photo"/>
               <div className="content">
                    <div className="text">
                        <h3>Suleman shoukat</h3>
                        <h6>Web Developer</h6>

                    </div>
                    <a href={this.props.goto}  className="btn active"><span></span></a>
                    <div className="box">
                     <i className="fa fa-facebook"></i>
                     <i className="fa fa-github"></i>
                     <i className="fa fa-tumblr"></i>
                     <i className="fa fa-twitter"></i>
                    </div>

               </div>

          </div>
          </div>


         


       );







  }

}

export default Profilebar;
