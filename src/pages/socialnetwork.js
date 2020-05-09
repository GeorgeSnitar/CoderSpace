import React from "react";
import BlogPostContainer from '../components/BlogPosts/BlogPost/BlogPostContainer';

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const SocialNetworkPage = () => (
  <Layout>
    <SEO title="News page" />
    
      <div>
       <BlogPostContainer concat={1}/>
      </div>
  
  </Layout>
)

export default SocialNetworkPage;