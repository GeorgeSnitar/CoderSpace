import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
     Welcome  to this unreal useful blog-site
    </div>
  </Layout>
)

export default IndexPage
