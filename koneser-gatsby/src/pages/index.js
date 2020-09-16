import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FullImageGallery from '../components/FullImageGallery';
import About from '../components/About';
import Button from "../components/Button";
import ImageAndTextGrid from "../components/ImageAndTextGrid";

const IndexPage = () => (
  <Layout>
    <SEO title="Strona Domowa" />
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
