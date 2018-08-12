import React, { Component } from 'react';
import Link from 'gatsby-link'
import NavBar from '../components/navBar'



import { withPrefix } from "gatsby-link";

const Header = ({location}) => {
    const isHomepage = location.pathname === withPrefix("/")
    
    return(
          <div>
            { isHomepage  ? 
              <section className="hero hero-image">
                <NavBar location={location} />
                  
                  <div className="container is-hidden-touch">
                      <div className="columns">
                        <div className="hero-body">
  
                          
                          <div className="column is-one-third">
                            
                            <div className="content">
                              <h2 className="has-text-dark">Live a Happier & Healthier Life!</h2>
                            </div>
                            <div className="content">
                          
                              <h5 className="title has-text-dark">Start Your 13 Week Journey</h5>
                              <ul>
                                <li className="has-text-primary"> Build new healthy habits</li>
                                <li className="has-text-primary"> Establish a chaos free mind-set</li>
                                <li className="has-text-primary"> Live with more purpose each day</li>
                                <li className="has-text-primary"> Pursue exciting adventures</li>
                              </ul>
                                    
                        
                            </div>  
                           
                            <div className="content">
                                <a href="https://gumroad.com/l/happierandhealthieryou/free">
                                  <div className="button is-large is-primary is-fullwidth">
                                    <span className="icon"><i className="fas fa-download"></i></span>
                                    <span>Free Download</span>
                                  </div>
                                </a>
                            </div>

                          </div>
                          
                          <div className="column">  
                           
                          </div>
                         
                        </div> 
                      </div> 
                  </div>

              </section>
            : <NavBar location={location} />
            }
          </div>
      ) 
}

export default Header
