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
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAjNVjaTGYCkBRs5otdvGYMG5xkwRvdER8&q=Koneser.+FPHU.+Kasperek+M.`}
                            allowFullScreen/>
                    </div>
                    <div className={'right'}>
                        <div><h3 className={'title'}>Kontakt</h3></div>
                        <div className={'phone'}><span className={'italic'}>(310) 285-7508</span></div>
                        <div className={'address'}><span className={'italic'}>42-400 Zawiercie, Rolnicza 77</span></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
