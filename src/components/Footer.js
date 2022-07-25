import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className={`footer-element`}>
            <div className={'footer-holder container'}>
                <div className={'footer-wrapper'}>
                    <div className={'left'}>
                        <div><h3 className={'title'}>Koneser | Meble na wymiar</h3></div>
                        <div><span className={'italic'}>Właściciel: Michał Kasperek</span></div>
                    </div>
                    <div className={'center'}>
                        <div><h3 className={'title'}>Lokalizacja</h3></div>
                        <iframe
                            className={'map'}
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.181236708819!2d19.408491115674583!3d50.49358457948137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717238d6f4fbeef%3A0x81e2bddb68efff5e!2sKoneser%20-%20Meble%20na%20wymiar!5e0!3m2!1sen!2spl!4v1658749510928!5m2!1sen!2spl`}
                            allowFullScreen/>
                    </div>
                    <div className={'right'}>
                        <div><h3 className={'title'}>Kontakt</h3></div>
                        <div className={'phone'}><a href={'tel:694 594 344'} className={'italic'}>694 594 344</a></div>
                        <div className={'address'}><span className={'italic'}>42-400 Zawiercie, Rolnicza 77</span></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
