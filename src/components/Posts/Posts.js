import React from 'react';
import Post from './Post';
import { StaticQuery, graphql} from 'gatsby';

const Posts = () => (
    <StaticQuery query={graphql`
    query MyQuery {
      contentfulPosts {
        postTitleText
        postImage {
          resolutions {
            src
          }
        }
        postText {
          postText
        }
      }
    }
    
 `}
    render={data => (
        <Post title={data.contentfulPosts.postTitleText}
         postText={data.contentfulPosts.postText.postText}
        image={data.contentfulPosts.postImage.resolutions.src}/>
    )}
    />
 ) 


export default Posts;