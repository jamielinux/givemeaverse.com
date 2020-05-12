/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useSlideshowContext } from 'contexts/SlideshowContext';
import { unhideModal, hideModals } from 'utils/index';
import SvgData from 'data/SvgData';
import Logo from './Logo';

type Format = 'full' | 'static' | 'minimal';

type Props = {
  format: Format;
};

const Header = (props: Props): React.ReactElement => {
  const { format } = props;

  const { pauseSlideshow, restartSlideshow } = useSlideshowContext();

  // We use three variations of the logo in the header.
  //   1. "full": Color circle and animate on page load.
  //   2. "static": Color circle and no animation.
  //   3. "minimal": Monochrome circle and animate on hover.
  const HeaderLogo = (): React.ReactElement => {
    if (format === 'full') {
      return (
        <div className={`header__logo--${format}`} aria-hidden="true">
          <Logo />
        </div>
      );
    }
    return (
      <Link
        className={`clickable  header__logo--${format}`}
        to="/"
        role="button"
        aria-label="Logo. Click here to navigate to the home page."
        tabIndex={0}
      >
        <Logo />
      </Link>
    );
  };

  const menuCloseHandler = (
    e: KeyboardEvent | React.KeyboardEvent | React.MouseEvent,
  ): void => {
    if (
      e.type === 'keyup' &&
      'key' in e &&
      e.key !== 'Enter' &&
      e.key !== 'Escape'
    ) {
      return;
    }

    // Restart the slideshow countdown (which can be "-1", aka disabled).
    restartSlideshow();

    const nav = document.getElementById('nav') as HTMLElement;
    nav.classList.remove('nav--is-active');
    document.body.classList.remove('body--is-inactive');

    // ACCESSIBILITY: Unhide elements from tab select and screen readers.
    const main = document.getElementById('main') as HTMLElement;
    hideModals({ content: main });
    // ACCESSIBILITY: Remove ESC event listener.
    document.onkeyup = null;
  };

  const menuOpenHandler = (e: React.KeyboardEvent | React.MouseEvent): void => {
    if (e.type === 'keyup' && 'key' in e && e.key !== 'Enter') {
      return;
    }

    // Pause the slideshow countdown.
    pauseSlideshow();

    // We hide the scrollbar when the nav menu is open. Make sure the menu
    // open and close icons still line up by calculating the width of the
    // browser scrollbar and adjusting the margin accordingly.
    const scrollbar = window.innerWidth - document.body.clientWidth;
    const navMarginRight = `calc(var(--header-margin-sides) + ${scrollbar}px)`;
    const nav = document.getElementById('nav') as HTMLElement;
    nav.classList.add('nav--is-active');
    nav.style.setProperty('--nav-margin-right', navMarginRight);

    const { body } = document;
    body.classList.add('body--is-inactive');

    // ACCESSIBILITY: Hide elements from tab select and screen readers.
    const main = document.getElementById('main') as HTMLElement;
    unhideModal({ content: main, modal: nav });
    // ACCESSIBILITY: Workaround for screen readers sometimes still being
    // able to navigate outside the nav until it is focused.
    const closeIcon = nav.querySelector('.nav__close-icon') as HTMLElement;
    closeIcon.focus();
    // ACCESSIBILITY: Allow to close with ESC.
    document.onkeyup = menuCloseHandler;
  };

  type NavLinkProps = {
    text: string;
    path: string;
  };

  const NavLink = ({ text, path }: NavLinkProps): React.ReactElement => {
    const linkId = `${text.toLowerCase()}-link`;
    return (
      <li className="nav__item">
        <Link
          id={`${linkId}`}
          onClick={menuCloseHandler}
          className="clickable  nav__link"
          to={path}
          aria-label={`Click here to navigate to the ${text} page.`}
          aria-hidden="true"
          tabIndex={-1}
        >
          {text}
        </Link>
      </li>
    );
  };

  NavLink.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  };

  // ACCESSIBILITY: MS Edge can't seem to cope with tab-selectable inline
  // SVGs, so we'll add an extra div instead (ie, the two "-wrapper" classes).
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <HeaderLogo />
        </div>

        <div className="header__menu-icon-wrapper">
          <div
            id="header__menu-icon"
            className="clickable"
            role="button"
            tabIndex={0}
            onClick={menuOpenHandler}
            onKeyUp={menuOpenHandler}
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 9 18"
              className="svg-menu"
              aria-hidden="true"
            >
              {SvgData.menuIcon}
            </svg>
          </div>
        </div>
      </div>

      <nav id="nav">
        <div className="nav__header">
          <div className="nav__close-icon-wrapper">
            <div
              className="clickable  nav__close-icon"
              role="button"
              aria-hidden="true"
              tabIndex={-1}
              onClick={menuCloseHandler}
              onKeyUp={menuCloseHandler}
              aria-label="Close navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 14 14"
                className="svg-close"
                aria-hidden="true"
              >
                {SvgData.closeIcon}
              </svg>
            </div>
          </div>
        </div>

        <div className="nav__block">
          <ul className="nav__list">
            <NavLink text="Home" path="/" />
            <NavLink text="About" path="/about" />
            <NavLink text="Contact" path="/contact" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  format: 'full',
};

Header.propTypes = {
  format: PropTypes.oneOf(['full', 'static', 'minimal']),
};

export default Header;
