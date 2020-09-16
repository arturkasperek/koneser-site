import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import GalleriesPicker from "../components/GalleriesPicker";
import GalleryPickerImg from '../assets/images/gallery_picker.jpg'


const Realizations = () => (
  <Layout>
    <SEO title="Realizacje" />
    <IntroImage image={GalleryPickerImg} title={'Nasze realizacje'} subTitle={'Sprawdź nasze realizacje!'}/>
    <GalleriesPicker />
  </Layout>
)

export default Realizations;
