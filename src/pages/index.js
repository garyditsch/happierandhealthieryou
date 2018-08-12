import React from 'react'
import Link from 'gatsby-link'
import WeeklyCards from '../components/weeklyCards'

const IndexPage = (props) => (
  <div>
      <WeeklyCards data={props.data} />
  </div>
)

export default IndexPage

export const query = graphql` 
    query IndexQuery {
        allContentfulLesson(
          sort: { fields: [week], order: ASC }
        )  {
            edges {
                node {
                    title
                    week
                    slug
                    description
                    youtube
                    soundcloud
                  	content {
                  	  id
                      }
                    featuredImage {
                        sizes(maxWidth: 400) {
                            ...GatsbyContentfulSizes
                        }
                    }
                    testing
                }
            }
        }
    }
`

