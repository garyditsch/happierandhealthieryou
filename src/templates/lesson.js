import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WeeklyMenus from '../components/weeklyMenu'



class LessonPost extends Component {
    render() {
        
        const { title, content, week } = this.props.data.contentfulLesson
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <progress className="progress is-medium is-dark" value={week} max="13" ></progress>
                            <div className="content lesson-content">
                                <h1>
                                    {title}
                                </h1>
                                <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
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

LessonPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default LessonPost
export const pageQuery = graphql`
    query lessonQuery($slug: String!){
        contentfulLesson(slug: {eq: $slug}) {
            title
            week
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

