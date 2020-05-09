import React from 'react';
import {Link} from 'gatsby';
import BlogPostViewContainer from './BlogPostView/BlogPostViewContainer';

const BlogPosts = () => {

    return (
        <div>
          <Link to="/freelancestart"><BlogPostViewContainer viewSlice={1}/></Link>
          <Link to="/socialnetwork"><BlogPostViewContainer viewSlice={0}/></Link>
        </div>
    )
}

export default BlogPosts;