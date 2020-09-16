import React from 'react';
import './About.scss';

const About = (props) => {
    return (
        <div className={'about-home'}>
            <div className={'container'}>
                <div className={'content-wrapper'}>
                    <div className={'left'}>
                        <div className={'left-wrapper'}>
                            <div className={'image-wrapper'} style={{backgroundImage: `url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)`}}/>
                        </div>
                    </div>
                    <div className={'right'}>
                        <div className={'title-wrapper'}>
                            <h3>O Koneserze</h3>
                        </div>
                        <div className={'content'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                        <div className={'bottom handwritten'}>Michał Kasperek</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
