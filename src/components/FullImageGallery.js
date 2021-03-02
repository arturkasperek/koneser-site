import React from 'react';
import { useStaticQuery } from 'gatsby';
import Slider from "react-slick";
import './FullImageGallery.scss';

const FullImageGallery = ({children}) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: false,
    };
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

    const images = [{
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
        <div className={'full-image-gallery'}>
            {!!images.length && (
                <Slider {...settings}>
                    {images.map((i, key) => (
                        <div className={'image-item'} key={key}>
                            <div className={'image-holder'} style={{backgroundImage: `url(${i.image})`}} />
                            <div className={'overlay'} style={{opacity: 0.42}} />
                            <div className={'content-holder'}>
                                <div className={'container'}>
                                    <div className={'content-container'}>
                                        <div className={'title'}>
                                            <h1>{i.name}</h1>
                                        </div>
                                        <div className={'content-child-item'}>
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default FullImageGallery;
