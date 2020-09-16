import React from 'react';
import { Link } from "gatsby";
import './GalleriesPicker.scss';
import Overlay from "./Overlay";
import KuchniaImg from '../assets/images/showcase/kuchnia.jpg'
import LazienkaImg from '../assets/images/showcase/lazienka.jpg'
import SalonImg from '../assets/images/showcase/salon.jpg'

const galleries = [{
    image: LazienkaImg,
    name: 'Łazienki',
    slug: 'lazienki',
}, {
    image: KuchniaImg,
    name: 'Kuchnie',
    slug: 'kuchnie',
}, {
    image: SalonImg,
    name: 'Salony',
    slug: 'salony',
}];

const GalleriesPicker = () => {
    return (
        <div className={`galleries-picker`}>
            {galleries.map(gallery => (
                <div className={'gallery-item'}>
                    <Link to={`/realizacje/${gallery.slug}`}>
                        <div className={'gallery-item-wrapper'}>
                            <div className={'image-holder'} style={{backgroundImage: `url(${gallery.image})`}} />
                            <Overlay opacity={0.5}/>
                            <div className={'gallery-name'}>
                                <h4 className={'no-margin'}>{gallery.name}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GalleriesPicker;
