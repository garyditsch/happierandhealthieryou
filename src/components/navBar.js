import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from "gatsby-link";

const NavBar = ({ siteTitle, location }) => {
    
    const isHomepage = location.pathname === withPrefix("/")
    return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand is-warning">
            <Link className="navbar-item" to="/">
                Happier & Healthier You
            </Link> 
        </div>
        {isHomepage ? <div>
            <div className="content is-hidden-desktop mobile-menu">
                <Link className="navbar-item" to="/week-one">
                    Start Today!
                </Link>
                <Link className="navbar-item " to="/why">
                    Why?
                </Link>
                <Link className="navbar-item " to="/blog">
                    Blog
                </Link>
                <Link className="navbar-item " to="/about">
                    About
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <Link className="navbar-item" to="/week-one">
                                    Start Today!
                                </Link>
                            </p>
                            <Link className="navbar-item " to="/why">
                                Why?
                            </Link>
                            <Link className="navbar-item " to="/blog">
                                Blog
                            </Link>
                            <Link className="navbar-item " to="/about">
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div> : ' '}
    </nav>
    )
}

export default NavBar