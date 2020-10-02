import React from 'react';
import { Link } from "gatsby";
import cn from 'classnames';
import LogoImg from '../assets/images/logo.png'
import './Header.scss';

class Header extends React.Component {
  state = {
    pinned: false,
    prevScrollTopPosition: 0,
    scrollDirectionDown: true,
  };

  uiScrollListener = () => {
    const scrollPosition = document.documentElement.scrollTop;
    let currentScrollTopPosition = scrollPosition;

    const scrollDirectionDown = currentScrollTopPosition - this.state.prevScrollTopPosition < 0;

    console.log('val is ', Math.abs(scrollPosition - this.state.prevScrollTopPosition))
    if (
        Math.abs(currentScrollTopPosition - this.state.prevScrollTopPosition) > 40 ||
        currentScrollTopPosition < 50
    ) {
      const pinned = 50 > currentScrollTopPosition;

      this.setState({
        prevScrollTopPosition: currentScrollTopPosition,
        scrollDirectionDown,
        pinned,
      });
    }
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

  render() {
    return (
      <div className={cn('header', {pinned: this.state.pinned, hide: !this.state.pinned && !this.state.scrollDirectionDown})}>
        <div className={'header-wrapper container'}>
          <div className={'header-holder'}>
            <div className={'left'}>
              <Link to={'/'}>
                <div className={'logo-wrapper'}>
                  <div class={'logo-container'}>
                    <img alt={''} src={LogoImg} className={'logo-holder'} />
                  </div>
                  <div>
                    <span className={cn('motto handwritten', {visible: this.state.pinned})}>Meble dla wymagających</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={'right nav-items'}>
              <Link to={'/realizacje'}>
                <span className={'heading'}>Realizacje</span>
              </Link>
              {/*<Link to={'/opinie'}>*/}
              {/*  <span className={'heading'}>Opinie</span>*/}
              {/*</Link>*/}
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
