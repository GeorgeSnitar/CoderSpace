import React from "react";
import PostContainer from '../components/Posts/Post/PostContainer';


import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const PythonPage = () => (
  <Layout>
    <SEO title="News page" />
    
      <div>
        <PostContainer concat={2}/>
      </div>
  
  </Layout>
)

export default PythonPage;