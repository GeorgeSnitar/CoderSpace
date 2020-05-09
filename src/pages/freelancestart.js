import React from "react";
import BlogPostContainer from '../components/BlogPosts/BlogPost/BlogPostContainer';

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const FreelanceStartPage = () => (
  <Layout>
    <SEO title="News page" />
    
      <div>
       <BlogPostContainer concat={0}/>
      </div>
  
  </Layout>
)

export default FreelanceStartPage