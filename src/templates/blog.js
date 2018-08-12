import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WeeklyMenus from '../components/weeklyMenu'



class BlogPost extends Component {
    render() {

        const { title, content } = this.props.data.contentfulBlog
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <progress className="progress is-medium is-dark" value="13" max="13" ></progress>
                            <div className="content">
                                <div className="blog-content">
                                    <h4>
                                        {title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-fifth">
                            <WeeklyMenus data={this.props.data} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

BlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost
export const pageQuery = graphql`
    query blogQuery($slug: String!){
        contentfulBlog(slug: {eq: $slug}) {
            title
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
        allContentfulLesson(
          sort: { fields: [week], order: ASC }
        )   {
            edges {
                node {
                    title
                    week
                    slug
                    youtube
                    soundcloud
                }
            }
        }
    }
`