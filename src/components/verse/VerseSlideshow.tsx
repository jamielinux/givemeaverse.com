/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import PropTypes from 'prop-types';
import { SUPPORTED_SLIDESHOW_INTERVALS } from 'constants/index';
import { useSlideshowContext } from 'contexts/SlideshowContext';

import SvgData from 'data/SvgData';
import { PopupCloseHandlerType } from './VerseMain';

export default function VerseSlideshow({
  popupCloseHandler,
}: {
  popupCloseHandler: PopupCloseHandlerType;
}): React.ReactElement {
  const { slideshowInterval, applySlideshowInterval } = useSlideshowContext();

  function handler(e: React.KeyboardEvent | React.MouseEvent): void {
    if (e.type === 'keyup' && 'key' in e && e.key !== 'Enter') {
      return;
    }
    popupCloseHandler('slideshow', slideshowInterval);
  }

  function onChangeHandler(e: React.ChangeEvent): void {
    const { value } = e.target as HTMLSelectElement;
    if (SUPPORTED_SLIDESHOW_INTERVALS.indexOf(value) < 0) {
      applySlideshowInterval(-1);
      document.onkeyup = (ev): void => {
        if (ev.key === 'Escape') {
          popupCloseHandler('slideshow', -1);
        }
      };
    } else {
      const interval = Number(value);
      applySlideshowInterval(interval);
      document.onkeyup = (ev): void => {
        if (ev.key === 'Escape') {
          popupCloseHandler('slideshow', interval);
        }
      };
    }
  }

  return (
    <div
      id="slideshow"
      role="dialog"
      aria-labelledby="slideshow__title"
      aria-describedby="slideshow__description"
      aria-hidden="true"
    >
      <div className="slideshow__header">
        {/* ACCESSIBILITY: MS Edge can't seem to cope with tab-selectable */}
        {/* inline SVGs, so we'll add an extra div instead. */}
        <div className="slideshow__close-icon-wrapper">
          <div
            className="clickable  slideshow__close-icon"
            role="button"
            aria-hidden="true"
            tabIndex={-1}
            aria-label="Close the slideshow dialog"
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

      {/* ACCESSIBILITY: <label> elements should BOTH wrap the containing */}
      {/* element (a <select> in this case) AND have an htmlFor attribute. */}
      <div className="slideshow__content">
        <div className="slideshow__item">
          <label
            id="slideshow__title"
            className="slideshow__label"
            htmlFor="select-slideshow-interval"
            aria-label="Choose an interval to automatically change to another verse."
          >
            Slideshow Interval
            <div className="slideshow__select-wrapper">
              <select
                id="select-slideshow-interval"
                className="clickable  slideshow__select"
                aria-hidden="true"
                tabIndex={-1}
                value={slideshowInterval}
                onChange={onChangeHandler}
                name="slideshowInterval"
              >
                <option value="-1">Disabled</option>
                <option value="10">10 seconds</option>
                <option value="30">30 seconds</option>
                <option value="60">60 seconds</option>
                <option value="120">2 minutes</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="svg-expand"
              >
                {SvgData.expandIcon}
              </svg>
            </div>
          </label>
        </div>

        <div className="slideshow__item">
          <p id="slideshow__description">
            Automatically change to another verse after the specified interval.
          </p>
        </div>
      </div>
    </div>
  );
}

VerseSlideshow.propTypes = {
  popupCloseHandler: PropTypes.func.isRequired,
};
