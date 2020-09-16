import React from 'react';
import { Link } from 'gatsby';
import './Button.scss';

const Button = (props) => {
    return (
        <div className={`button-element ${props.type}`}>
            <Link to={props.to}>
                <div className={'button-wrapper'}>
                    {props.children}
                </div>
            </Link>
        </div>
    );
};

export default Button;
