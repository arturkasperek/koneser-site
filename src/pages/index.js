import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullImageGallery from '../components/FullImageGallery';
import About from '../components/About';
import Button from "../components/Button";
import ImageAndTextGrid from "../components/ImageAndTextGrid";

import KuchniaImg from '../assets/images/realizacje/kuchnie-main.jpg'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Strona Domowa" image={`${data.site.siteMetadata.siteUrl}${KuchniaImg}`} />
    <FullImageGallery>
      <div>
          <Button type={'primary'} to={'/realizacje'}>
            Sprawdź realizacje
          </Button>
      </div>
    </FullImageGallery>
    <About />
    <div className={'container'}>
      <h2 className={'main-title'}>Jak wygląda zamówienie ?</h2>
    </div>
    <ImageAndTextGrid />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`