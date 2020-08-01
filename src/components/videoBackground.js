import React, { Component } from 'react'
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
export class VideoBackground extends Component {
    render() {
        return (
            <div >
                
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
            </div>
        )
    }
}

export default VideoBackground
