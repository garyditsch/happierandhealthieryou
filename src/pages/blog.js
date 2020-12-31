import React from 'react'
import Link from 'gatsby-link'
import BlogList from '../components/blogList'

const BlogPage = (props) => {
    console.log(props)
    return <div>
        <BlogList data={props.data} />
    </div>
}

export default BlogPage

export const query = graphql` 
    query BlogQuery {
        allContentfulBlog(
            sort: { fields: [updatedAt], order: DESC }
        )
        {
            edges {
                node {
                    title
                    updatedAt
                    slug
                  	content {
                  	  id
                    }
                    
                }
            }
        }
    }
`