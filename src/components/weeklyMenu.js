import React from 'react'
import Link from 'gatsby-link'


const WeeklyMenu = ({
    data: {
        allContentfulLesson: {
            edges
        }
    }
}) => (
        <aside className="menu">
            <p className="menu-label">
                Menu
            </p>
            <ul className="menu-list">
                <li><Link to="/why">Why</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://gumroad.com/l/happierandhealthieryou/free">
                    <span className="icon"><i className="fas fa-download"></i></span>
                    <span>Download</span>
                </a></li>
            </ul>
            <p className="menu-label">
                Listen to Lessons
            </p>
            <ul className="menu-list">
                <a href={edges[0].node.youtube}>
                    <li><span className="icon">
                        <i className="fab fa-youtube-square "></i>
                    </span> YouTube</li>
                </a>
                <a href={edges[0].node.soundcloud} className="menu-list">
                    <li><span className="icon">
                        <i className="fab fa-soundcloud "></i>
                    </span> Soundcloud</li>
                </a>
            </ul>
            <p className="menu-label">
                Weekly Menu
            </p>
            <ul className="menu-list">
                {edges.map((week, i) => 
                    <Link to={week.node.slug}>
                        <li>{week.node.title}</li>
                    </Link>
                )}
                
            </ul>
        </aside>       
    )

export default WeeklyMenu