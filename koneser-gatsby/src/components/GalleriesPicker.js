import React from 'react';
import { Link } from "gatsby";
import './GalleriesPicker.scss';
import Overlay from "./Overlay";
import KuchniaImg from '../assets/images/showcase/kuchnie.jpg'
import LazienkaImg from '../assets/images/showcase/lazienki.jpg'
import InneImg from '../assets/images/showcase/inne.jpg'
import SzafaImg from '../assets/images/showcase/szafy-garderoby.jpg'

const galleries = [{
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

const GalleriesPicker = () => {
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
