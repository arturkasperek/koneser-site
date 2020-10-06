import React from 'react';
import {Link, useStaticQuery} from "gatsby";
import './GalleriesPicker.scss';
import Overlay from "./Overlay";

const GalleriesPicker = () => {
    const imagesData = useStaticQuery(graphql`
        fragment ImageFields on ImageSharpFluid {
          srcWebp
          maxHeight: presentationHeight
          maxWidth: presentationWidth
        }
        
        query {
          kuchniaImg: file(relativePath: {eq: "images/realizacje/kuchnie-main.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...ImageFields
              }
            }
          }
          lazienkaImg: file(relativePath: {eq: "images/realizacje/lazienki-main.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...ImageFields
              }
            }
          }
          inneImg: file(relativePath: {eq: "images/realizacje/inne-main.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...ImageFields
              }
            }
          }
          szafaImg: file(relativePath: {eq: "images/realizacje/szafy-garderoby-main.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...ImageFields
              }
            }
          }
        }
    `);

    const galleries = [{
        image: imagesData['kuchniaImg'].childImageSharp.fluid.srcWebp,
        name: 'Kuchnie',
        slug: 'kuchnie',
    }, {
        image: imagesData['lazienkaImg'].childImageSharp.fluid.srcWebp,
        name: 'Łazienki',
        slug: 'lazienki',
    }, {
        image: imagesData['szafaImg'].childImageSharp.fluid.srcWebp,
        name: 'Szafy I Garderoby',
        slug: 'szafy-garderoby',
    }, {
        image: imagesData['inneImg'].childImageSharp.fluid.srcWebp,
        name: 'Inne',
        slug: 'inne',
    }];

    return (
        <div className={`galleries-picker container`}>
            {galleries.map(gallery => (
                <div className={'gallery-item'}>
                    <Link to={`/realizacje/${gallery.slug}`}>
                        <div className={'gallery-item-wrapper'}>
                            <div className={'image-holder'} style={{backgroundImage: `url(${gallery.image})`}} />
                            <Overlay opacity={0.2}/>
                            <div className={'gallery-name'}>
                                <h3 className={'no-margin'}>{gallery.name}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GalleriesPicker;
