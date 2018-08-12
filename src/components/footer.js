import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
    <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <Link className="button is-primary" to="/week-one">
                                        Start Today!
                                    </Link>
                                </p>
                                <p className="control">
                                    <a className="button is-dark" href="https://gumroad.com/l/happierandhealthieryou/free">
                                        <span className="icon"><i className="fas fa-download"></i></span>
                                        <span>Download</span>
                                    </a>
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
            </div>
        </div>
    </section>
)

export default Footer