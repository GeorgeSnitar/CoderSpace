import React from 'react';
import PostViewContainer from './PostView/PostViewContainer';
import { Link } from "gatsby";

const Posts = () =>  {

  
    return (
      <>
        <Link to="/jamstack/"><PostViewContainer viewSlice={2}/></Link>
        <Link to="/graphql/"><PostViewContainer viewSlice={1}/></Link>
        <Link to="/python/"><PostViewContainer viewSlice={0}/></Link>
      </>
    )
  

}


export default Posts;