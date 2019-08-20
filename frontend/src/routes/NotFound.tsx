import React from 'react';
import {RouteComponentProps} from "react-router";
import IntroImage from "../components/IntroImage";

interface Props extends RouteComponentProps {
}

const NotFound: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={'not-found-page'}>
            <IntroImage image={'/404_image.png'} title={'404'}/>
        </div>
    );
};

export default NotFound;