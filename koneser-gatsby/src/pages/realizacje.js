import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import GalleriesPicker from "../components/GalleriesPicker";
import GalleryPickerImg from '../assets/images/realizacje/main.jpg'

const Realizations = ({data}) => (
  <Layout>
    <SEO title="Realizacje" image={`${data.site.siteMetadata.siteUrl}${GalleryPickerImg}`} />
    <IntroImage image={GalleryPickerImg} backgroundPosition={'center 20%'} title={'Nasze realizacje'} subTitle={'Sprawdź nasze realizacje!'}/>
    <GalleriesPicker />
  </Layout>
)

export default Realizations;

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`