import React from 'react';
import { Link } from "react-router-dom";
import './GalleriesPicker.scss';
import {GalleryPickAsset} from "../utils/API";
import Overlay from "./Overlay";


interface Props {
    galleries: GalleryPickAsset[];
}

const GalleriesPicker: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={`galleries-picker`}>
            {props.galleries.map(gallery => (
                <div className={'gallery-item'}>
                    <Link to={`/realizacje/${gallery.slug}`}>
                        <div className={'gallery-item-wrapper'}>
                            <div className={'image-holder'} style={{backgroundImage: `url(${gallery.image})`}} />
                            <Overlay opacity={0.5}/>
                            <div className={'gallery-name'}>
                                <h5 className={'no-margin'}>{gallery.name}</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GalleriesPicker;