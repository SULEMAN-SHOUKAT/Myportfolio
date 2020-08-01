import React,{Component} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./resourses/style.css";
import "./resourses/css/bootstrap.min.css";
import "./resourses/css/all.min.css";
import "./resourses/vendor/Magnific-Popup/dist/magnific-popup.css";


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "./resourses/css/style.css";
import "./resourses/css/responsive.css";

import service1 from "./resourses/img/services/s1.png";
import service2 from "./resourses/img/services/s2.png";
import service3 from "./resourses/img/services/s3.png";
import service4 from "./resourses/img/services/s4.png";


class Services extends Component {






  render(){


    return(




      <section className="services-area" style={{marginTop:"8rem"}} id="services">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center services-title" style={{marginBottom:"3rem"}}>
                      <h1 className="text-uppercase title-text row_3">Services We Offer</h1>

                  </div>
              </div>
              <div className="container services-list">
                  <div className="row row_1">
                      <div className="col-lg-3 col-md-6 col-sm-12 service" style={{backgroundColor:"rgba(248, 252, 253, 0.973)"}}>
                          <div className="services">
                              <div className="sevices-img text-center py-4">
                                  <img src={service1} alt="Services-1"/>
                              </div>
                              <div className="card-body text-center">
                                  <h5 className="card-title text-uppercase font-roboto">Front-END development</h5>
                                  <p className="card-text card-text-1 text-secondary">
                                      A Front-end Developer is responsible for the coding, design and layout of a website according to a company's specifications.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 service" style={{backgroundColor:"rgba(248, 252, 253, 0.973)"}}>
                          <div className="services">
                              <div className="sevices-img text-center py-4">
                                  <img src={service2} alt="Services-2"/>
                              </div>
                              <div className="card-body text-center">
                                  <h5 className="card-title text-uppercase font-roboto">ux/ui desing</h5>
                                  <p className="card-text text-secondary">
                                      Illustrating design ideas using storyboards, process flows,sitemaps. Designing graphic user interface  like menus, tabs and widgets.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 service" style={{backgroundColor:"rgba(248, 252, 253, 0.973)"}}>
                          <div className="services">
                              <div className="sevices-img text-center py-4">
                                  <img src={service3} alt="Services-3"/>
                              </div>
                              <div className="card-body text-center">
                                  <h5 className="card-title text-uppercase font-roboto">web design</h5>
                                  <p className="card-text text-secondary">
                                       A web designer creates the look, layout,features of a website.The job involves understanding both graphic design and computer programming
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 service" style={{backgroundColor:"rgba(248, 252, 253, 0.973)"}}>
                          <div className="services">
                              <div className="sevices-img text-center py-4">
                                  <img src={service4} alt="Services-4"/>
                              </div>
                              <div className="card-body text-center">
                                  <h5 className="card-title text-uppercase font-roboto">Back-end development</h5>
                                  <p className="card-text text-secondary">
                                    Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row row_2">
                 <div className="col-lg-10  text-center row_2_copy">
                  <a href="#Technologies" className="btn button primary-button text-uppercase" >How we Work</a>

                 </div>
             </div>
          </div>

      </section>






    );







  }
}

export default Services;
