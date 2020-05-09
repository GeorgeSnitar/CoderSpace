import React from "react";
import Posts from "../components/Posts/Posts";

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const NewsPage = () => (
  <Layout>
    <SEO title="News page" />
    <h1 style={{textDecoration: 'underline',textDecorationColor: 'black'}}>News page</h1>
    <Posts />
  </Layout>
)

export default NewsPage
