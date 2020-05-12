/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { useSlideshowContext } from 'contexts/SlideshowContext';
import { VerseFontContextProvider } from 'contexts/VerseFontContext';
import { TranslationContextProvider } from 'contexts/TranslationContext';

import { unhideModal, hideModals } from 'utils/index';
import Header from 'components/common/Header';
import Button from 'components/common/Button';
import { VerseDataType } from 'data/VerseData';
import VerseCard from './VerseCard';
import VerseControlPanel from './VerseControlPanel';
import VerseSettings from './VerseSettings';
import VerseSlideshow from './VerseSlideshow';
import VerseInfo from './VerseInfo';
import VerseFooter from './VerseFooter';

type PopupType = 'info' | 'settings' | 'slideshow';

export type PopupCloseHandlerType = (
  name: PopupType,
  interval?: number,
) => void;

export type PopupOpenHandlerType = (name: PopupType) => void;

export default function VerseMain({
  thisVerse,
}: {
  thisVerse: VerseDataType;
}): React.ReactElement {
  const { pauseSlideshow, restartSlideshow } = useSlideshowContext();

  function popupCloseHandler(name: string, interval?: number): void {
    // Restart the slideshow countdown (which can be "-1", aka disabled).
    restartSlideshow(interval);

    // Unhide the rest of the page.
    const content = document.getElementById('content') as HTMLElement;
    content.classList.remove('content--is-inactive');
    const popup = document.getElementById(name) as HTMLElement;
    popup.classList.remove(`${name}--is-active`);

    // ACCESSIBILITY: Hide the popup again.
    popup.setAttribute('aria-hidden', 'true');
    // ACCESSIBILITY: Unhide elements from tab select and screen readers.
    hideModals({ content });
    // ACCESSIBILITY: Remove ESC event listener.
    document.onkeyup = null;
  }

  function popupOpenHandler(name: string): void {
    // Pause the slideshow countdown.
    pauseSlideshow();

    // Hide the rest of the page.
    const content = document.getElementById('content') as HTMLElement;
    content.classList.add('content--is-inactive');
    const popup = document.getElementById(name) as HTMLElement;
    popup.classList.add(`${name}--is-active`);

    // ACCESSIBILITY: Unhide the popup and draw attention to it.
    popup.removeAttribute('aria-hidden');
    // ACCESSIBILITY: Hide elements from tab select and screen readers.
    unhideModal({ content, modal: popup });
    // ACCESSIBILITY: Focus the most sensible element in the popup.
    if (name === 'info') {
      const popupCloseIcon = popup.querySelector(
        `.${name}__close-icon`,
      ) as HTMLElement;
      popupCloseIcon.focus();
    } else {
      const popupSelect = popup.querySelector('select') as HTMLSelectElement;
      popupSelect.focus();
    }
    // ACCESSIBILITY: Allow to close with ESC.
    document.onkeyup = (e): void => {
      if (e.key === 'Escape') {
        popupCloseHandler(name);
      }
    };
  }

  const buttonRef = useRef(null);

  return (
    <>
      <VerseFontContextProvider>
        <VerseSettings popupCloseHandler={popupCloseHandler} />
        <VerseSlideshow popupCloseHandler={popupCloseHandler} />
        <VerseInfo popupCloseHandler={popupCloseHandler} />
        <TranslationContextProvider>
          <div id="content">
            <Header format="minimal" />
            <main id="main" className="verse">
              <VerseCard thisVerse={thisVerse} buttonRef={buttonRef} />
              <VerseControlPanel
                verseId={thisVerse.id}
                popupOpenHandler={popupOpenHandler}
              />
              <Button ref={buttonRef} />
            </main>
            <VerseFooter />
          </div>
        </TranslationContextProvider>
      </VerseFontContextProvider>
    </>
  );
}

VerseMain.propTypes = {
  thisVerse: PropTypes.shape({
    id: PropTypes.string.isRequired,
    book: PropTypes.string.isRequired,
    chapter: PropTypes.number.isRequired,
    startVerse: PropTypes.number.isRequired,
    numVerses: PropTypes.number.isRequired,
    text: PropTypes.shape({
      esv: PropTypes.string.isRequired,
      kjv: PropTypes.string.isRequired,
      niv: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
