import React from 'react'
import Link from 'gatsby-link'
import BlogList from '../components/blogList'

const BlogPage = (props) => (
    <div>
        <BlogList data={props.data} />
    </div>
)

export default BlogPage

export const query = graphql` 
    query BlogQuery {
        allContentfulBlog {
            edges {
                node {
                    title
                    slug
                  	content {
                  	  id
                    }
                    
                }
            }
        }
    }
`