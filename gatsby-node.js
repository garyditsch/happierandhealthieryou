/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        const lessonTemplate = path.resolve('src/templates/lesson.js')
        const blogTemplate = path.resolve('src/templates/blog.js')
        resolve(
            graphql(`
            {
                lessonData: allContentfulLesson {
                    edges {
                        node {
                            title
                            week
                            slug
                            description
                            content {
                            id
                            }
                        }
                    }
                }
            
                blogData: allContentfulBlog {
                    edges {
                        node {
                            title
                            slug
                            description {
                            id
                            }
                            content {
                            id
                            }
                        }
                    }
                }
            }`
            ).then((result) => {
                console.log(result)
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.lessonData.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: lessonTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                });
                result.data.blogData.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: blogTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                });
                return
            })
        )
    })
};

