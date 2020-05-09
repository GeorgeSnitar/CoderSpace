import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostView from '../../Posts/PostView/PostView';


const BlogPostViewContainer = (props) => {
    const getBlogPostView = graphql`
    query MyBlogPostView {
      allContentfulBlogPostView {
        edges {
          node {
            id
            blogPostViewImage {
              resolutions {
                src
              }
            }
            blogPostViewText {
              blogPostViewText
            }
          }
        }
      }
    }
    
      
  `
  const response = useStaticQuery(getBlogPostView);
  const views = response.allContentfulBlogPostView.edges;

  let result = views.map((view) => (
    <li key={view.node.id}>
            <PostView 
            viewImage={view.node.blogPostViewImage.resolutions.src}
            viewText={view.node.blogPostViewText.blogPostViewText} />
    </li>
  ))

  function ViewSlicer(i){
    return result[i]
  }
  
    return (
        <div>
          <ul>
          {ViewSlicer(props.viewSlice)}
          </ul>
        </div>
    )
}

export default BlogPostViewContainer;