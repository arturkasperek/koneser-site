import React from 'react';
import { Link } from "gatsby";
import './GalleriesPicker.scss';
import Overlay from "./Overlay";

const galleries = [{
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
