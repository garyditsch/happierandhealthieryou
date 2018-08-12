import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"



const WeeklyCards = ({
    data: {
        allContentfulLesson: {
            edges
        }
    }
}) => (
    <section className="section">
        <div className="container">
            <div className="columns is-multiline">

            {edges.map((week, i) => 
                <div className="column is-one-quarter" key={i}>
                    <div className="card" >
                        <header className="card-header">
                            <Link to={week.node.slug}>
                                <h1 className="card-header-title">{week.node.title}</h1>
                            </Link>
                        </header>
                        
                        <div className="card-image">
                            <Img sizes={week.node.featuredImage.sizes} />
                            
                        </div>
                        <div className="card-content">
                            <p>{week.node.description}</p>
                        </div>
                        <footer className="card-footer">
                            <Link to={week.node.slug} className="card-footer-item">Weekly Lesson</Link>
                        </footer>
                    </div>
                </div>
            )}

            </div>
        </div>
    </section>
)

export default WeeklyCards