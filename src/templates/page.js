import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PagePost extends Component {
    render() {

        const { title } = this.props.data.contentfulPages

        return (
            <div>{title}</div>
        )
    }
}

PagePost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default PagePost

// export const pageQuery = graphql`
//     query PageContentQuery($slug: String!){
//         contentfulPages(slug: {eq: $slug}) {
//             title
//         }
//     }
// `

