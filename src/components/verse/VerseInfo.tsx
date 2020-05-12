/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import PropTypes from 'prop-types';
import SvgData from 'data/SvgData';
import { PopupCloseHandlerType } from './VerseMain';

export default function VerseInfo({
  popupCloseHandler,
}: {
  popupCloseHandler: PopupCloseHandlerType;
}): React.ReactElement {
  function handler(e: React.KeyboardEvent | React.MouseEvent): void {
    if ('key' in e) {
      if (e.type === 'keyup' && e.key !== 'Enter') {
        return;
      }
    }
    popupCloseHandler('info');
  }

  // ACCESSIBILITY: MS Edge can't seem to cope with tab-selectable inline
  // SVGs, so we'll add an extra div instead (ie, the "-wrapper" class).
  return (
    <div id="info" aria-label="Information dialog" aria-hidden="true">
      <div className="info__header">
        <div className="info__close-icon-wrapper">
          <div
            className="clickable  info__close-icon"
            role="button"
            aria-hidden="true"
            tabIndex={-1}
            aria-label="Close the information dialog"
            onClick={handler}
            onKeyUp={handler}
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
      <div className="info__content">
        <h3 className="info__heading">Information</h3>
        <ul>
          <li id="info__settings" className="info__item">
            <div className="info__row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="28"
                viewBox="0 0 24 24"
                className="svg-settings"
                role="img"
                aria-label="Settings icon"
              >
                <title>Settings icon</title>
                {SvgData.settingsIcon}
              </svg>
              Configure the font to use for verses and the colour theme for the
              website.
            </div>
          </li>
          <li id="info__slideshow" className="info__item">
            <div className="info__row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="28"
                viewBox="0 0 24 24"
                className="svg-slideshow"
                role="img"
                aria-label="Slideshow icon"
              >
                <title>Slideshow icon</title>
                {SvgData.slideshowIcon}
              </svg>
              Automatically change to another verse at a specified interval.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

VerseInfo.propTypes = {
  popupCloseHandler: PropTypes.func.isRequired,
};
