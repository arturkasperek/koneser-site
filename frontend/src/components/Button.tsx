import React from 'react';
import './Button.scss';

type ButtonTypes = 'primary' | 'secondary';

interface Props {
    type: ButtonTypes
}

const Button: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={`button-element ${props.type}`}>
            <div className={'button-wrapper'}>
                {props.children}
            </div>
        </div>
    );
};

export default Button;