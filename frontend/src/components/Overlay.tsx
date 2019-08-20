import React from 'react';
import './Overlay.scss';

interface Props {
    opacity: number;
    color?: string,
}

const Overlay: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={`overlay-component`} style={{opacity: props.opacity, backgroundColor: props.color}} />
    );
};

Overlay.defaultProps = {
    color: 'black',
};

export default Overlay;