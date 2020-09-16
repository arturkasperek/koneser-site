import React from 'react';
import './Overlay.scss';

const Overlay = (props) => {
    return (
        <div className={`overlay-component`} style={{opacity: props.opacity, backgroundColor: props.color}} />
    );
};

Overlay.defaultProps = {
    color: 'black',
};

export default Overlay;
