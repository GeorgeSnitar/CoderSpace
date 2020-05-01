import React from "react";
import Posts from "../components/Posts/Posts";
// import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const NewsPage = () => (
  <Layout>
    <SEO title="News page" />
    <Posts />
  </Layout>
)

export default NewsPage
