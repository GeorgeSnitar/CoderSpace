// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// exports.createPages = async({graphql, actions }) => {
//    const { createPage } = actions
//    const result = await graphql(`
//    query MyAllBlogPost {
//     allContentfulBlogPost {
//       edges {
//         node {
//           blogPostImage {
//             resolutions {
//               src
//             }
//           }
//           blogPostText {
//             blogPostText
//           }
//           blogPostText2 {
//             blogPostText2
//           }
//           blogPostTitle
//           id
//         }
//       }
//     }
//   }
//   `)
//   const blogposts = result.data.allContentfulBlogPost.edges;
//   blogposts.forEach(blogpost => {
//     createPage({
//       path: `blogposts/${blogpost.node.id}`,
//       component: path.resolve(`./src/pages/BlogPosts/blogposts.js`),
//     })
//   })
// }