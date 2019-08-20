import React, {useContext, useEffect, useState, FunctionComponent} from 'react';
import './ImagesGallery.scss'
import {RouteComponentProps} from "react-router";
import IntroImage from "../components/IntroImage";
import API, {GalleryResource} from "../utils/API";
import GridGallery from "../components/GridGallery";

interface Props extends RouteComponentProps<{id: string}> {
}

const emptyImagesGalleryState: GalleryResource = {
    introImage: '',
    introName: '',
    name: '',
    images: [],
};

const ImagesGallery: FunctionComponent<Props> = (props: Props) => {
    const [{ images, name, introName, introImage }, setImageGallery] = useState(emptyImagesGalleryState);

    useEffect(() => {
        const getDataFromBackend = async () => {
            try {
                const galleryPickerResources = await API.getGalleryResource(props.match.params.id);

                setImageGallery({
                    ...galleryPickerResources,
                });
            } catch (e) {
                props.history.push('/404');
            }
        };

        getDataFromBackend();
    }, []);

    return (
        <div className={'images-gallery'}>
            <IntroImage image={introImage} title={introName}/>
            <div className={'content-wrapper'}>
                <div className={'container'}>
                    <h3 className={'title'}>{name}</h3>
                </div>
                <GridGallery images={images}/>
            </div>
        </div>
    );
};

export default ImagesGallery;