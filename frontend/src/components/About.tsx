import React from 'react';
import './About.scss';
import {AboutContent} from "../utils/API";

interface Props {
    about: AboutContent;
}

const About: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={'about-home'}>
            <div className={'container'}>
                <div className={'content-wrapper'}>
                    <div className={'left'}>
                        <div className={'left-wrapper'}>
                            <div className={'image-wrapper'} style={{backgroundImage: `url(${props.about.image})`}}/>
                        </div>
                    </div>
                    <div className={'right'}>
                        <div className={'title-wrapper'}>
                            <h3>{props.about.title}</h3>
                        </div>
                        <div className={'content'}>
                            {props.about.description}
                        </div>
                        <div className={'bottom handwritten'}>{props.about.bottom}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;