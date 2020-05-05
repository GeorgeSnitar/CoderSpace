import React from "react";
import ModalWelcomeContainer from '../components/Modal/ModalWelcomeContainer';

import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo/Seo";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ModalWelcomeContainer />
    <h1>{data.contentfulHomePage.homeTitles}</h1>
    <div style={{ display: 'flex' }}>
      <img src={data.contentfulHomePage.homeImage.resolutions.src} />
      <p>{data.contentfulHomePage.homeText1.homeText1}</p>
    </div>
    <h1>Way to success</h1>
    <div style={{display:'flex'}}>
      <p>{data.contentfulHomePage.homeText2.homeText2}</p>
      <img src={data.contentfulHomePage.homeImage2.resolutions.src} />
    </div>
  </Layout>
)

export const query = graphql`
query MyHomePage {
  contentfulHomePage {
    homeImage {
      resolutions {
        src
      }
    }
    homeImage2 {
      resolutions {
        src
      }
    }
    homeText1 {
      homeText1
    }
    homeText2 {
      homeText2
    }
    homeTitles
  }
}
`
export default IndexPage
