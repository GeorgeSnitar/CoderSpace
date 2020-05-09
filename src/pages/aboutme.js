import React from "react"
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo/Seo";
import { graphql } from 'gatsby';
import Skills from '../components/Skills/Skills';

const AboutMe = ({ data }) => (
  <Layout>
    <SEO title="About me page" />
    <h1>Something About Me </h1>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <img src={data.contentfulAboutMe.aboutMeImage.resolutions.src} />
      <div>
        <p style={{marginBottom: '2.5em'}}><strong>Hi there !</strong>
          <br /> My name is George. I'm <strong>21</strong> years old and welcome to my blog!
         <br /> I have started to learn code since <strong>19</strong> years.
          <br /> Here, I'll talk to you about my mistakes which you shouldn't do.
           <br />I will talk about my next achievement too.
            <br /> I wish you a good time reading my blog!
        </p>
        <Skills style={{ alignSelf: 'flex-end' }} />
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link><br />
  </Layout>
)


export const query = graphql`
query MyAboutMe {
  contentfulAboutMe {
    aboutMeId
    aboutMeImage {
      resolutions {
        src
      }
    }
  }
}
`

export default AboutMe;

