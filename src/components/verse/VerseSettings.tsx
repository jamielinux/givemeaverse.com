/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import PropTypes from 'prop-types';

import { useThemeContext, ThemeType } from 'contexts/ThemeContext';
import { useVerseFontContext, VerseFontType } from 'contexts/VerseFontContext';
import SvgData from 'data/SvgData';
import {
  DEFAULT_THEME,
  DEFAULT_VERSE_FONT,
  SUPPORTED_THEMES,
  SUPPORTED_VERSE_FONTS,
} from 'constants/index';
import { PopupCloseHandlerType } from './VerseMain';

export default function VerseSettings({
  popupCloseHandler,
}: {
  popupCloseHandler: PopupCloseHandlerType;
}): React.ReactElement {
  const { theme, applyTheme } = useThemeContext();
  const { verseFont, setVerseFont } = useVerseFontContext();

  function handler(e: React.KeyboardEvent | React.MouseEvent): void {
    if (e.type === 'keyup' && 'key' in e && e.key !== 'Enter') {
      return;
    }
    popupCloseHandler('settings');
  }

  function onChangeHandler(e: React.ChangeEvent): void {
    const { id, value } = e.target as HTMLSelectElement;
    if (id === 'select-verse-font') {
      if (SUPPORTED_VERSE_FONTS.indexOf(value) >= 0) {
        setVerseFont(value as VerseFontType);
      } else {
        setVerseFont(DEFAULT_VERSE_FONT);
      }
    } else if (SUPPORTED_THEMES.indexOf(value) >= 0) {
      applyTheme(value as ThemeType);
    } else {
      applyTheme(DEFAULT_THEME);
    }
  }

  return (
    <div
      id="settings"
      role="dialog"
      aria-label="Settings dialog"
      aria-hidden="true"
    >
      <div className="settings__header">
        {/* ACCESSIBILITY: MS Edge can't seem to cope with tab-selectable */}
        {/* inline SVGs, so we'll add an extra div instead. */}
        <div className="settings__close-icon-wrapper">
          <div
            className="clickable  settings__close-icon"
            role="button"
            aria-hidden="true"
            tabIndex={-1}
            aria-label="Close the settings dialog"
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
      <div className="settings__content">
        <div className="settings__item">
          <label
            className="settings__label"
            htmlFor="select-verse-font"
            aria-label="Choose a font to use for displaying verses"
          >
            Verse Font
            <div className="settings__select-wrapper">
              <select
                id="select-verse-font"
                className="clickable  settings__select"
                aria-hidden="true"
                tabIndex={-1}
                value={verseFont}
                onChange={onChangeHandler}
                name="verseFont"
              >
                <option value="sans-serif">Sans-Serif</option>
                <option value="serif">Serif</option>
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
        <div className="settings__item">
          <label
            className="settings__label"
            htmlFor="select-theme"
            aria-label="Choose a theme to use for the website"
          >
            Theme
            <div className="settings__select-wrapper">
              <select
                id="select-theme"
                className="clickable  settings__select"
                aria-hidden="true"
                tabIndex={-1}
                value={theme}
                onChange={onChangeHandler}
                name="theme"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
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
      </div>
    </div>
  );
}

VerseSettings.propTypes = {
  popupCloseHandler: PropTypes.func.isRequired,
};
