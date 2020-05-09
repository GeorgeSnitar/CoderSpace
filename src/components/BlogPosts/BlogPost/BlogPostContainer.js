import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BlogPost from './BlogPost';
import style from './BlogPostContainer.module.css';


const getBlogPosts = graphql`
query MyBlogPost {
    allContentfulBlogPost {
      edges {
        node {
          blogPostImage {
            resolutions {
              src
            }
          }
          blogPostText {
            blogPostText
          }
          blogPostText2 {
            blogPostText2
          }
          blogPostTitle
          id
        }
      }
    }
  }
`

const BlogPostContainer = (props) => {
  const response = useStaticQuery(getBlogPosts);
  const posts = response.allContentfulBlogPost.edges;
  let result = posts.map((post) => (
    <li key={post.node.id}>
        <BlogPost
        blogPostImage={post.node.blogPostImage.resolutions.src} 
        blogPostTitle={post.node.blogPostTitle}  
        blogPostText={post.node.blogPostText.blogPostText}
        blogPostText2={post.node.blogPostText2.blogPostText2}/>
    </li>
  ))

  function Slicer(i){
    return result[i];
  }
 

    return (
        <div className={style.blogPostContainer}>
            <ul>
                {Slicer(props.concat)}
            </ul>
        </div>

    )
}

export default BlogPostContainer;