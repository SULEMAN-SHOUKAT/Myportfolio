import React from 'react';
import './App.css';
import  'bootstrap';
import VideoBackground from './components/videoBackground.js';
import NavigationBar from './components/Navigation.js';
import Header from './components/header.js';
import About from './components/about.js';
import Services from './components/services.js';
import Technologies from "./components/Technologies.js";
import Client from './components/client.js';
import Contactme from './components/contactme.js';
import Mycard from './components/mycard.js';
import Footer from "./components/fottor.js";
import Myinfo from "./components/Myinfo.js";

function App() {
  return (
    <div style={{position: "sticky"}}>
      
      
    <NavigationBar />
    <Header/>
    <About/>
    <Services/>
    <Technologies/>
    <Myinfo/>
    <Client/>
    <Contactme/>
    <Mycard/>
    <Footer/>
    </div>
  );
}

export default App;
