import './GridGallery.scss';
import Slider from "react-slick";
import React, { useState } from "react";

const GridGallery = (props) => {
    const [mainRef, setMainRef] = useState(null);
    const [subRef, setSubRef] = useState(null);
    const settingsMain = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 5000,
        autoplay: false,
        pauseOnHover: true,
        asNavFor: subRef,
    };
    const settingsSub = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 8,
        swipeToSlide: true,
        focusOnSelect: true,
        asNavFor: mainRef,
    };
    const images = props.images;

    console.log(images);

    return (
        <div className={'grid-gallery-component container'}>
            <div className={'grid-gallery-wrapper'}>
                <div className={'main'}>
                    <Slider ref={slider => setMainRef(slider)} {...settingsMain}>
                        {images.map((image, key) => (
                            <div className={`image-item ${image.maxHeight > image.maxWidth ? 'contain': ''}`} key={key}>
                                <div className={'image-holder'} style={{backgroundImage: `url(${image.src})`}} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className={'sub'}>
                    <Slider ref={slider => setSubRef(slider)} {...settingsSub}>
                        {images.map((image, key) => (
                            <div className={`image-item ${image.maxHeight > image.maxWidth ? 'contain': ''}`} key={key}>
                                <div className={'image-holder'} style={{backgroundImage: `url(${image.src})`}} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default GridGallery;
