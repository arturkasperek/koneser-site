import React, {useContext, useEffect, useState, FunctionComponent} from 'react';
import { Link } from "react-router-dom";
import {RouteComponentProps} from "react-router";
import './ImagesGalleryPicker.scss';
import IntroImage from "../components/IntroImage";
import API, {emptyAboutContent, GalleryPickerResources} from "../utils/API";
import GalleriesPicker from "../components/GalleriesPicker";

interface Props extends RouteComponentProps {
}

const emptyImagesGalleryPickerState: GalleryPickerResources = {
    galleries: [],
};

const ImagesGalleryPicker: FunctionComponent<Props> = (props: Props) => {
    const [{ galleries }, setImagesGalleryPicker] = useState(emptyImagesGalleryPickerState);

    useEffect(() => {
        const getDataFromBackend = async () => {
            const galleryPickerResources = await API.getGalleryPickerResources();

            setImagesGalleryPicker({
                ...galleryPickerResources,
            });
        };

        getDataFromBackend();
    }, []);

    return (
        <div className={'images-gallery-picker'}>
            <IntroImage image={'/gallery_picker.jpg'} title={'Nasze realizacje'} subTitle={'Meble Koneser to meble tworzone z pasją!'}/>
            <GalleriesPicker galleries={galleries}/>
        </div>
    );
};

export default ImagesGalleryPicker;