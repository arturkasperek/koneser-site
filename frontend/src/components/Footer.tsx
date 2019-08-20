import React from 'react';
import './Footer.scss';


interface Props {
    leftColumnText: string;
    leftColumnTextBottom: string;
    phoneNumber: string;
    address: string;
}

const Footer: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={`footer-element`}>
            <div className={'footer-holder container'}>
                <div className={'footer-wrapper'}>
                    <div className={'left'}>
                        <div><h3 className={'title'}>{props.leftColumnText}</h3></div>
                        <div><span className={'italic'}>{props.leftColumnTextBottom}</span></div>
                    </div>
                    <div className={'center'}>
                        <div><h3 className={'title'}>Lokalizacja</h3></div>
                        <iframe
                            className={'map'}
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=Koneser.+FPHU.+Kasperek+M.`}
                            allowFullScreen/>
                    </div>
                    <div className={'right'}>
                        <div><h3 className={'title'}>Kontakt</h3></div>
                        <div className={'phone'}><span className={'italic'}>{props.phoneNumber}</span></div>
                        <div className={'address'}><span className={'italic'}>{props.address}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;