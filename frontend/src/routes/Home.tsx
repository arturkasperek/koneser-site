import React, {useContext, useEffect, useState, FunctionComponent} from 'react';
import { Link } from "react-router-dom";
import {RouteComponentProps} from "react-router";
import FullImageGallery from "../components/FullImageGallery";
import ImageAndTextGrid from "../components/ImageAndTextGrid";
import API, {AboutContent, emptyAboutContent, Slide, TextAndImageItem} from "../utils/API";
import './Home.scss';
import Button from "../components/Button";
import About from "../components/About";
import {GlobalStateContext} from "../components/GlobalStateProvider";

interface Props extends RouteComponentProps {
}

interface State {
    slides: Slide[];
    about: AboutContent,
    textAndImageItems: TextAndImageItem[];
    logoURL: string;
    motto: string;
}

interface HomepageState {
    slides: Slide[];
    about: AboutContent;
    textAndImageItems: TextAndImageItem[];
}

const emptyHomepageState: HomepageState = {
    slides: [],
    about: emptyAboutContent,
    textAndImageItems: [],
};

const Home: FunctionComponent<Props> = (props: Props) => {
    //const { logo, motto } = useContext(GlobalStateContext);
    const [{ slides, about, textAndImageItems }, setHomepageState] = useState(emptyHomepageState);

    useEffect(() => {
        const getDataFromBackend = async () => {
            const homeResources = await API.getHomeResources();

            setHomepageState({
                ...homeResources,
            });
        };

        getDataFromBackend();
    }, []);

    return (
        <div className={'home-page'}>
            <FullImageGallery images={slides}>
                <div>
                    <Link to={'/realizacje'}>
                        <Button type={'primary'}>
                            Sprawdź realizacje
                        </Button>
                    </Link>
                </div>
            </FullImageGallery>
            <About about={about}/>
            <div className={'container'}>
                <h2 className={'main-title'}>Jak wygląda zamówienie ?</h2>
            </div>
            <ImageAndTextGrid items={textAndImageItems} />
        </div>
    )
};

export default Home;