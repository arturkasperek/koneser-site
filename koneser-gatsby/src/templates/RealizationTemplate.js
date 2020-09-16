import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import GridGallery from "../components/GridGallery";
import './RealizationTemplate.scss';

export default class RealizationTemplate extends React.Component {
  render() {
    const {name, introImage, images} = this.props.pathContext;
    return <Layout>
      <SEO title="TODO" />
      <div className={'realization-template'}>
        <IntroImage image={introImage} title={name}/>
        <div className={'content-wrapper'}>
          <GridGallery images={images}/>
        </div>
      </div>
    </Layout>
  }
}
