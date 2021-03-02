import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import NotFoundImg from '../assets/images/404_image.png'


const NotFoundPage = ({data}) => (
  <Layout>
    <SEO title="404: Not found" image={`${data.site.siteMetadata.siteUrl}${NotFoundImg}`} />
    <IntroImage image={NotFoundImg} title={'404'}/>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`