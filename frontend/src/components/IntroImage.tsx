import React from 'react';
import './IntroImage.scss';

interface Props {
    title?: string;
    subTitle?: string;
    image: string;
}

const IntroImage: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={`intro-image`}>
            <div className={'image-holder'} style={{backgroundImage: `url(${props.image})`}}/>
            <div className={'overlay'} style={{opacity: 0.42}} />
            <div className={'title-element-container'}>
                <div className={'title-element'}>
                    <div className={'title-element-wrapper'}><h1>{props.title}</h1></div>
                    <div className={'title-element-wrapper'}><h5>{props.subTitle}</h5></div>
                </div>
            </div>
        </div>
    );
};

export default IntroImage;