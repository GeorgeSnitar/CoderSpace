import React from 'react';
import PostViewContainer from './PostView/PostViewContainer';
import { Link } from "gatsby";

const Posts = (props) =>  {

  
    return (
      <div>
        <Link to="/jamstack/"><PostViewContainer viewSlice={0}/></Link>
        <Link to="/graphql/"><PostViewContainer viewSlice={2}/></Link>
        <Link to="/python/"><PostViewContainer viewSlice={1}/></Link>
      </div>
    )
  

}


export default Posts;