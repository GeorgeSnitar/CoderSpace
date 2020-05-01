import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About me page" />
    <h1>Hi from the AboutMe page</h1>
    <p>Welcome to AboutMe page</p>
    <Link to="/">Go back to the homepage</Link><br/>
  </Layout>
)

export default AboutMe;
