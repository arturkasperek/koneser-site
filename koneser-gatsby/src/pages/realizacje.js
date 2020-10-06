import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import GalleriesPicker from "../components/GalleriesPicker";
import GalleryPickerImg from '../assets/images/realizacje/main.jpg'
import {useStaticQuery} from "gatsby";

const Realizations = ({}) => {
    const data = useStaticQuery(graphql`        
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }
          mainImg: file(relativePath: {eq: "images/realizacje/main.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                srcWebp
                maxHeight: presentationHeight
                maxWidth: presentationWidth
              }
            }
          }
        }
    `);
    return (
        <Layout>
            <SEO title="Realizacje" image={`${data.site.siteMetadata.siteUrl}${GalleryPickerImg}`} />
            <IntroImage image={data['mainImg'].childImageSharp.fluid.srcWebp} backgroundPosition={'center 20%'} title={'Nasze realizacje'} subTitle={'Sprawdź nasze realizacje!'}/>
            <GalleriesPicker />
        </Layout>
    )
}

export default Realizations;