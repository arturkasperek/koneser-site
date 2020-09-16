import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <IntroImage image={'/images/404_image.png'} title={'404'}/>
  </Layout>
)

export default NotFoundPage
