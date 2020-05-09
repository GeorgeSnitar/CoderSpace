import React from "react";
import Layout from "../components/Layout/Layout.js";
import SEO from "../components/Seo/Seo";
import BlogPosts from '../components/BlogPosts/BlogPosts.js';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog page" />
    <h1 style={{textDecoration: 'underline',textDecorationColor: 'black'}}>Blog page</h1>
    <BlogPosts />
  </Layout>
)

export default BlogPage
