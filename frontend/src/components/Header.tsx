import React from 'react';
import { Link } from "react-router-dom";
import cn from 'classnames';
import './Header.scss';

interface Props {
    logoURL: string;
    motto: string;
}

interface State {
    pinned: boolean;
    prevScrollTopPosition: number;
    scrollDirectionDown: boolean;
}

class Header extends React.Component<Props, State> {
    state = {
        pinned: false,
        prevScrollTopPosition: 0,
        scrollDirectionDown: true,
    };

    uiScrollListener = () => {
        const scrollPosition = document.documentElement.scrollTop;
        let currentScrollTopPosition = scrollPosition;

        const scrollDirectionDown = currentScrollTopPosition - this.state.prevScrollTopPosition < 0;
        const pinned = 50 > currentScrollTopPosition;

        this.setState({
            prevScrollTopPosition: currentScrollTopPosition,
            scrollDirectionDown,
            pinned,
        });
    };

    componentDidMount() {
        const scrollPos = document.documentElement.scrollTop
        window.addEventListener('scroll', this.uiScrollListener);

        this.setState({
            prevScrollTopPosition: scrollPos,
            pinned: scrollPos === 0,
            scrollDirectionDown: true
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.uiScrollListener);
    }

    render(): React.ReactNode {
        return (
            <div className={cn('header', {pinned: this.state.pinned, hide: !this.state.pinned && !this.state.scrollDirectionDown})}>
                <div className={'header-wrapper container'}>
                    <div className={'header-holder'}>
                        <div className={'left'}>
                            <Link to={'/'}>
                                <div className={'logo-wrapper'}>
                                    <div>
                                        <img src={this.props.logoURL} className={'logo-holder'} />
                                    </div>
                                    <div>
                                        <span className={cn('motto handwritten', {visible: this.state.pinned})}>{this.props.motto}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={'right nav-items'}>
                            <Link to={'/realizacje'}>
                                <span className={'heading'}>Realizacje</span>
                            </Link>
                            <Link to={'/opinie'}>
                                <span className={'heading'}>Opinie</span>
                            </Link>
                            <Link to={'/kontakt'}>
                                <span className={'heading'}>Kontakt</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;