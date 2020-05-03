import React from 'react';
import Post from './Post';
import { useStaticQuery, graphql } from 'gatsby';
import s from './PostContainer.module.css';


const getPosts = graphql`
query MyPosts {
    allContentfulPosts(sort: {fields: id}) {
      edges {
        node {
          postImage {
            resolutions {
              src
            }
          }
          id
          postText {
            postText
          }
          postTitleText
        }
      }
    }
  } 
`

const PostContainer = (props) => {
  const response = useStaticQuery(getPosts);
  const posts = response.allContentfulPosts.edges;
  let result = posts.map((post) => (
    <li key={post.node.id}>
        <Post
        postTitle={post.node.postTitleText}
        postText={post.node.postText.postText}
        postImage={post.node.postImage.resolutions.src} />
    </li>
  ))

  function Slicer(i){
    return result[i];
  }
 

    return (
        <div className={s.postContainer}>
            <ul>
                {Slicer(props.concat)}
            </ul>
        </div>

    )
}






export default PostContainer