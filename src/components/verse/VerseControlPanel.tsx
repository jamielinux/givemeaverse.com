/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { SUPPORTED_TRANSLATIONS } from 'constants/index';
import { useThemeContext } from 'contexts/ThemeContext';
import { useCardColorContext } from 'contexts/CardColorContext';
import { useTranslationContext } from 'contexts/TranslationContext';
import { useSlideshowContext } from 'contexts/SlideshowContext';
import SvgData, { SvgDataType } from 'data/SvgData';
import { PopupOpenHandlerType } from './VerseMain';

export default function VerseControlPanel({
  verseId,
  popupOpenHandler,
}: {
  verseId: string;
  popupOpenHandler: PopupOpenHandlerType;
}): React.ReactElement {
  const { theme } = useThemeContext();
  const { verseCardColor } = useCardColorContext();
  const { translation, changeTranslationHandler } = useTranslationContext();
  const { slideshowInterval } = useSlideshowContext();

  function translationHandler(e: React.KeyboardEvent | React.MouseEvent): void {
    const { id } = e.target as HTMLElement;
    const name = id.split('__')[1];
    if (e.type === 'keyup' && 'key' in e && e.key !== 'Enter') {
      return;
    }
    changeTranslationHandler({ name, verseCardColor });
  }

  function TranslationListItem({ name }: { name: string }): React.ReactElement {
    const nameUppercase = name.toUpperCase();
    const currentTranslation = `The current translation is ${nameUppercase}.`;
    const otherTranslation = `Select ${nameUppercase} translation.`;

    /* These two rules are just confused by the ternary operators. */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    return (
      <li>
        <div
          onClick={translationHandler}
          onKeyUp={translationHandler}
          tabIndex={translation === name ? -1 : 0}
          className="clickable  verse__translation"
          id={`verse__${name}`}
          role={translation === name ? 'none' : 'button'}
          aria-label={
            name === translation ? currentTranslation : otherTranslation
          }
        >
          {nameUppercase}
        </div>
      </li>
    );
  }

  TranslationListItem.propTypes = {
    name: PropTypes.oneOf(SUPPORTED_TRANSLATIONS).isRequired,
  };

  function iconHandler(e: React.KeyboardEvent | React.MouseEvent): void {
    if (e.type === 'keyup' && 'key' in e && e.key !== 'Enter') {
      return;
    }
    const { target } = e;
    const settingsIcon = document.getElementById(
      'verse__settings-icon',
    ) as HTMLElement;
    const slideshowIcon = document.getElementById(
      'verse__slideshow-icon',
    ) as HTMLElement;
    if (settingsIcon === target || settingsIcon.contains(target as Node)) {
      popupOpenHandler('settings');
    } else if (
      slideshowIcon === target ||
      slideshowIcon.contains(target as Node)
    ) {
      popupOpenHandler('slideshow');
    } else {
      popupOpenHandler('info');
    }
  }

  function IconListItem({
    name,
    extraClass,
  }: {
    name: string;
    extraClass: string;
  }): React.ReactElement {
    const iconName = `${name}Icon` as SvgDataType;
    return (
      <li>
        <div
          id={`verse__${name}-icon`}
          onClick={iconHandler}
          onKeyUp={iconHandler}
          tabIndex={0}
          className={`clickable  verse__icon ${extraClass}`}
          role="button"
          aria-label={`Open the ${name} dialog`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            width="36"
            viewBox="0 0 24 24"
            className={`svg-${name}`}
            aria-hidden="true"
          >
            {SvgData[iconName]}
          </svg>
        </div>
      </li>
    );
  }

  IconListItem.defaultProps = {
    extraClass: '',
  };

  IconListItem.propTypes = {
    name: PropTypes.string.isRequired,
    extraClass: PropTypes.string,
  };

  // Workaround for MS Edge browser bug. The SVGs display with default fill
  // color, and only after a hover event do they pick up var(--color-mid).
  // Setting the attribute again seems to make it work.
  useLayoutEffect(() => {
    const svgPaths = document.getElementsByClassName('svg__fgpath');
    Array.from(svgPaths).forEach((element) => {
      element.setAttribute('fill', 'var(--color-mid)');
    });
  }, []);

  useLayoutEffect(() => {
    const active = 'verse__translation--is-active';
    const elem = document.getElementById(
      `verse__${translation}`,
    ) as HTMLElement;
    elem.classList.add(active);
    return (): void => elem.classList.remove(active);
  }, [translation, verseId, theme, slideshowInterval]);

  return (
    <section className="verse__control-panel">
      <ul className="verse__translations">
        <TranslationListItem name="esv" />
        <TranslationListItem name="niv" />
        <TranslationListItem name="kjv" />
      </ul>

      <ul className="verse__icons">
        <IconListItem name="settings" />
        <IconListItem
          name="slideshow"
          extraClass={
            slideshowInterval !== -1
              ? `verse__icon--is-active--${theme}-${verseCardColor}`
              : ''
          }
        />
        <IconListItem name="info" />
      </ul>
    </section>
  );
}

VerseControlPanel.propTypes = {
  verseId: PropTypes.string.isRequired,
  popupOpenHandler: PropTypes.func.isRequired,
};
