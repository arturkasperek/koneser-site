import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import GalleriesPicker from "../components/GalleriesPicker";

const Realizations = () => (
  <Layout>
    <SEO title="Realizacje" />
    <IntroImage image={'/images/gallery_picker.jpg'} title={'Nasze realizacje'} subTitle={'Sprawdź nasze realizacje!'}/>
    <GalleriesPicker />
  </Layout>
)

export default Realizations;
