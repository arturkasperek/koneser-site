import React from 'react';
import Slider from "react-slick";
import './FullImageGallery.scss';

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
        image: '/images/showcase/lazienka.jpg',
        name: 'Łazienki',
        slug: 'lazienki',
    }, {
        image: '/images/showcase/kuchnia.jpg',
        name: 'Kuchnie',
        slug: 'kuchnie',
    }, {
        image: '/images/showcase/salon.jpg',
        name: 'Salony',
        slug: 'salony',
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
