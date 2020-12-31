import React from 'react'
import Link from 'gatsby-link'




const BlogList = ({
    data: {
        allContentfulBlog: {
            edges
        }
    }
}) => (
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1>Blog Posts</h1>
                </div>
            </div>
            <div className="container">
                <div className="columns is-multiline">
                    {edges.map((blog, i) =>
                        <div className="column is-half" key={i}>
                            <div style={{ height: '100%', backgroundColor: '#f5f5f5', borderLeft: '5px solid #dbdbdb'}}>
                                <header>
                                    <Link to={blog.node.slug}>
                                        <h1 className="card-header-title">{blog.node.title}</h1>
                                    </Link>
                                </header>
                                <div>{blog.node.updatedAt}</div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )

export default BlogList 