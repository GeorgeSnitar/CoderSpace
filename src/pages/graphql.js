import React from "react";
import PostContainer from '../components/Posts/Post/PostContainer';


import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const GraphQlPage = () => (
  <Layout>
    <SEO title="News page" />
    
      <div>
        <PostContainer concat={0}/>
      </div>
  
  </Layout>
)

export default GraphQlPage;