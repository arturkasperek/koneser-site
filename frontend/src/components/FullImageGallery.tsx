import React from 'react';
import Slider from "react-slick";
import './FullImageGallery.scss';
import {Slide} from "../utils/API";

interface Props {
    images: Slide[];
}

const FullImageGallery: React.FunctionComponent<Props> = (props) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: false,
    };
    return (
        <div className={'full-image-gallery'}>
            {!!props.images.length && (
                <Slider {...settings}>
                    {props.images.map((i, key) => (
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