import './GridGallery.scss';
import Gallery from 'react-grid-gallery';
import InfiniteScroll from 'react-infinite-scroller';
import React, {useContext, useState} from "react";

const INITIAL_IMAGE_LOAD_COUNT = 15;
export const MaxImageIndexLoadContext = React.createContext(INITIAL_IMAGE_LOAD_COUNT);

const ImageComponent = (props) => {
    const maxImageIndexLoad = useContext(MaxImageIndexLoadContext);

    if ( props.index < maxImageIndexLoad ) {
        return <img {...props.imageProps} />;
    } else {
        return <div key={props.key} className={'to-load'} />;
    }
};

const GridGallery = (props) => {
    const [maxImageIndexToShow, setMaxImageIndexToShow] = useState(INITIAL_IMAGE_LOAD_COUNT);
    const images = props.images.map((item, index) => ({
        src: item,
        thumbnail: item,
        thumbnailWidth: maxImageIndexToShow > index ? 320 : 0,
        thumbnailHeight: maxImageIndexToShow > index ? 174 : 0,
    }));
    const loadMore = () => {
        setMaxImageIndexToShow(maxImageIndexToShow + 15);
    };

    return (
        <div className={'grid-gallery-component container'}>
            <div className={'grid-gallery-wrapper'}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadMore}
                    hasMore={maxImageIndexToShow < images.length}
                    loader={<div className="loader" key={0}>Ładuje ...</div>}
                >
                    <MaxImageIndexLoadContext.Provider value={maxImageIndexToShow}>
                        <Gallery enableImageSelection={false} images={images} imageCountSeparator={' z '} thumbnailImageComponent={ImageComponent} />
                    </MaxImageIndexLoadContext.Provider>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default GridGallery;
