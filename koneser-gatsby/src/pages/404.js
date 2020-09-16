import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import NotFoundImg from '../assets/images/404_image.png'


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <IntroImage image={NotFoundImg} title={'404'}/>
  </Layout>
)

export default NotFoundPage
