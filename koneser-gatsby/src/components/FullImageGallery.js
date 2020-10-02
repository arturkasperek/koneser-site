import React from 'react';
import Slider from "react-slick";
import './FullImageGallery.scss';
import KuchniaImg from '../assets/images/showcase/kuchnie.jpg'
import LazienkaImg from '../assets/images/showcase/lazienki.jpg'
import InneImg from '../assets/images/showcase/inne.jpg'
import SzafaImg from '../assets/images/showcase/szafy-garderoby.jpg'

const FullImageGallery = (props) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: false,
    };
    const images = [{
        image: KuchniaImg,
        name: 'Kuchnie',
        slug: 'kuchnie',
    }, {
        image: LazienkaImg,
        name: 'Łazienki',
        slug: 'lazienki',
    }, {
        image: SzafaImg,
        name: 'Szafy I Garderoby',
        slug: 'szafy-garderoby',
    }, {
        image: InneImg,
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
                                            {props.children}
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
