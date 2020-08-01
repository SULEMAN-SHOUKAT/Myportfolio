
import React from 'react';
import "bootstrap";
import { Link,Scroll } from "react-scroll";
import '../App.css';
import "./resourses/css/sb-admin-2.css";
import "./resourses/css/sb-admin-2.min.css";
import './resourses/vendor/fontawesome-free/css/all.min.css';
import "chart.js";
import "./resourses/style.css";
import { Line,Doughnut } from 'react-chartjs-2';
import "../App.css";
import pic from "./resourses/img/undraw_posting_photo.svg";


class Myinfo extends React.Component {

constructor(){
    super();
    this.state={
        lineGraph:{
            type: 'line',
            data: {
              labels: ["Flask","Python", "Express", "Node js", "Java", "React Native" ,"React js"],
              datasets: [{
                label: "Expert Level",
                lineTension: 0.3,
                backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [40,55,65,60,50,60,70]
              }],
            },
            options: {
              maintainAspectRatio: false,
              layout: {
                padding: {
                  left: 10,
                  right: 25,
                  top: 25,
                  bottom: 0
                }
              },
              scales: {
                xAxes: [{
                  time: {
                    unit: 'date'
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    maxTicksLimit: 7
                  }
                }],
                yAxes: [{
                  ticks: {
          
                    maxTicksLimit:10,
                    padding: 10,
                    // Include a dollar sign in the ticks
                    callback: function(data, index, values) {
          
                      return data+"%"  ;
                    }
                  },
                  gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                  }
                }],
              },
              legend: {
                display: false
              },
              tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                  label: function(tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel +": " + tooltipItem.yLabel+ '%';
                  }
                }
              }
            }
        },
        Doughnut:{
            data: {
                labels: ["React js", "Node js", "BootStrap"],
                datasets: [{
                  data: [55, 30, 15],
                  backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                  hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                  hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
              },
              options: {
                maintainAspectRatio: false,
                tooltips: {
                  backgroundColor: "rgb(255,255,255)",
                  bodyFontColor: "#858796",
                  borderColor: '#dddfeb',
                  borderWidth: 1,
                  xPadding: 15,
                  yPadding: 15,
                  displayColors: false,
                  caretPadding: 10,
                },
                legend: {
                  display: false
                },
                cutoutPercentage: 80,
              }
        },

        class_for_sidebar:"body_box",
        class_of_sidebar:"navbar-nav  fixed-left bg-gradient-primary sidebar sidebar-dark accordion"

    
    }
}


   
    



sidebar=()=>{
    if(this.state.class_for_sidebar=="body_box"){
        this.setState({class_for_sidebar:"body_box  sidebar-toggled"})
        this.setState({class_of_sidebar:"navbar-nav  fixed-left bg-gradient-primary sidebar sidebar-dark accordion toggled"})
    }
    else{
        this.setState({class_for_sidebar:"body_box"})
        this.setState({class_of_sidebar:"navbar-nav  fixed-left bg-gradient-primary sidebar sidebar-dark accordion"})
    }
}







    render(){
       
        
        return (
        <div className="myinfo_popup" id="Myinfo">
          
            <div className={this.state.class_for_sidebar} >
             <div id="page-top">


<div id="wrapper">


  <ul className={this.state.class_of_sidebar} id="accordionSidebar">


    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#home">
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
      </div>
      <div className="sidebar-brand-text mx-3">SULEMAN<sup></sup></div>
    </a>


    <hr className="sidebar-divider my-0"></hr>



    <hr className="sidebar-divider"></hr>

    <div className="sidebar-heading">
      Menu
    </div>

    <li className="nav-item">
      <a className="nav-link  scroll-to-bottom collapsed"  href="#home"   aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>Home</span>
      </a>

    </li>

    <li className="nav-item">
      <a className="nav-link collapsed" href="#services"  aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Services</span>
      </a>

    </li>


    <hr className="sidebar-divider"></hr>

    <div className="sidebar-heading">
      Home
    </div>


    <li className="nav-item">
      <a className="nav-link collapsed" href="#about"  aria-expanded="true" aria-controls="collapsePages">
        <i className="fas fa-fw fa-folder"></i>
        <span>Go Back</span>
      </a>

    </li>




    <hr className="sidebar-divider d-none d-md-block"></hr>


    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" onClick={()=>this.sidebar()} id="sidebarToggle"></button>
    </div>

  </ul>

  <div id="content-wrapper" className="d-flex flex-column">


    <div id="content">


      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


        <button id="sidebarToggleTop" onClick={()=>this.sidebar()} className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>



        <ul className="navbar-nav ml-auto">






          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">About Me</span>

            </a>

          </li>

        </ul>

      </nav>

      <div className="container-fluid " style={{marginLeft:"-1.5rem",marginTop:"-2rem"}} >




        <div className="row">


          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 w-100 py-3 ">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Name</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Suleman Shoukat</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 w-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Skill</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Developer</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-laptop fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 w-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Expert level</div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">70%</div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 w-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Area</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Web</div>
                  </div>
                  <div className="col-auto">
                    <i className="fa fa-globe fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
      <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4 h-100 w-100">

              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-4 c_h6 font-weight-bold text-primary">Expertise in Technology</h6>

              </div>

              <div className="card-body" >
                <div className="chart-area" >
                  <Line data={this.state.lineGraph.data} options={this.state.lineGraph.options} 
                  gridLines={this.state.lineGraph.gridLines}
                  ticks={this.state.lineGraph.options.scales.ticks}
                  yAxes={this.state.lineGraph.options.scales.yAxes}
                  gridLines={this.state.lineGraph.gridLines}
                  tooltips={this.state.lineGraph.options.tooltips}
                  legend={this.state.lineGraph.legend}
                  scales={this.state.lineGraph.scales}
                  layout={this.state.lineGraph.options.layout}
                  id="myAreaChart"></Line>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4 h-100 w-100">

              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-1 c_6 font-weight-bold text-primary">Technology Usage in Web Developement</h6>

              </div>

              <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                  <Doughnut data={this.state.Doughnut.data} options={this.state.Doughnut.options} id="myPieChart"></Doughnut>
                </div>
                <div className="mt-4 text-center small">
                  <span className="mr-2">
                    <i className="fas fa-circle text-primary"></i> React js
                  </span>
                  <span className="mr-2">
                    <i className="fas fa-circle text-success"></i> Node js
                  </span>
                  <span className="mr-2">
                    <i className="fas fa-circle text-info"></i>BootStrap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row ">


          <div className="col-lg-6  mt-4 ">

            <div className="card shadow mb-4 h-100 w-100">
              <div className="card-header py-3">
                <h6 className="m-4 c_h6 font-weight-bold text-primary">Customer Involvement in Different Stages</h6>
              </div>
              <div className="card-body mt-3">
                <h4 className="small c_h4 font-weight-bold">Requirement Gathering <span className="float-right">100%</span></h4>
                <div className="progress mb-4">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}}  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="small  c_h4 font-weight-bold">Design (Customer can be involved in desiging of user interface) <span className="float-right">10%</span></h4>
                <div className="progress mb-4">
                  <div className="progress-bar bg-danger" role="progressbar"style={{width: "40%"}}  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="small c_h4 font-weight-bold">Testing<span className="float-right">70%</span></h4>
                <div className="progress mb-4">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="small c_h4  font-weight-bold">Installation (Customer need to be train to use the system) <span className="float-right">65%</span></h4>
                <div className="progress mb-4">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: "65%"}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="small c_h4 font-weight-bold">Maintenance<span className="float-right">70%</span></h4>
                <div className="progress">
                  <div className="progress-bar bg-info " role="progressbar" style={{width: "70%"}}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>



          </div>

          <div className="col-lg-6 mt-4  Development_Approach">


            <div className="card shadow mb-2 h-100 w-100">
              <div className="card-header py-3 " id="Development Approach">
                <h6 className="m-0  c_h6 font-weight-bold text-primary">Development Approach</h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={pic} alt=""/>
                </div>
                <p>The Iterative model is repetition incarnate. Instead of starting with fully known requirements, you implement a set of software requirements, then test, evaluate and pinpoint further requirements. A new version of the software is produced with each phase, or iteration </p>
                <a  rel="nofollow" href="#services" >Check Visual Model of Process in Services Area By pressing the (how we work) button&rarr;</a>
              </div>
            </div>



          </div>
        </div>

      </div>


    </div>



    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
         
        </div>
      </div>
    </footer>

  </div>


</div>



<a className="scroll-to-top rounded w-100 h-100" href="#page-top">
  <i className="fas fa-angle-up"></i>
</a>





</div>

            </div>
            
            </div>
          );
    }
  
}

export default Myinfo;
