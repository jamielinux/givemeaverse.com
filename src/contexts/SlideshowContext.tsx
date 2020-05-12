/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SUPPORTED_SLIDESHOW_INTERVALS } from 'constants/index';
import { useCardColorContext } from 'contexts/CardColorContext';
import {
  createCtx,
  unhideModal,
  readValidateStorage,
  pushRandomVerse,
} from 'utils/index';

type SlideshowContextType = {
  slideshowInterval: number;
  applySlideshowInterval: (requestedInterval: number) => void;
  pauseSlideshow: () => void;
  restartSlideshow: (interval?: number) => void;
};

const [useSlideshowContext, ContextProvider] = createCtx<
  SlideshowContextType
>();

export function SlideshowContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [slideshowInterval, setSlideshowInterval] = useState(() => {
    const storedSetting = readValidateStorage({
      name: 'slideshowInterval',
      supportedSettings: SUPPORTED_SLIDESHOW_INTERVALS,
      defaultValue: '-1',
    });
    return Number(storedSetting);
  });

  const history = useHistory();
  const { verseId } = useParams();
  const { verseCardColor } = useCardColorContext();
  const countdownRef = useRef(slideshowInterval);
  const prevSlideshowInterval = useRef(slideshowInterval);
  const prevCountdownRef = useRef(-1);

  function applySlideshowInterval(requestedInterval: number): void {
    setSlideshowInterval(requestedInterval);
  }

  function pauseSlideshow(): void {
    prevSlideshowInterval.current = slideshowInterval;
    prevCountdownRef.current = countdownRef.current;
    countdownRef.current = -1;
  }

  function restartSlideshow(interval?: number): void {
    if (
      typeof interval !== 'undefined' &&
      interval !== prevSlideshowInterval.current
    ) {
      // User may have changed the slideshow interval in the slideshow dialog.
      countdownRef.current = interval;
    } else {
      countdownRef.current = prevCountdownRef.current;
    }
  }

  useLayoutEffect(() => {
    // ACCESSIBILITY: Hide elements from tab select and screen readers.
    // If the slideshow popup is open, re-hide elements after re-render.
    const content = document.getElementById('content');
    const modal = document.getElementById('slideshow');
    if (modal && !modal.hasAttribute('aria-hidden')) {
      unhideModal({ content, modal });
    }
  }, [slideshowInterval]);

  // Automatically select another verse if slideshow is enabled.
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownRef.current >= 0) {
        countdownRef.current -= 1;
      }
      if (countdownRef.current === 0) {
        countdownRef.current = slideshowInterval;
        const state = {
          avoidColor: verseCardColor,
          avoidVerseId: verseId,
        };
        pushRandomVerse({ history, state });
      }
    }, 1000);
    return (): void => clearInterval(interval);
  }, [history, slideshowInterval, verseCardColor, verseId]);

  useEffect(() => {
    localStorage.setItem('slideshowInterval', slideshowInterval.toString());
  }, [slideshowInterval]);

  const value = {
    slideshowInterval,
    applySlideshowInterval,
    pauseSlideshow,
    restartSlideshow,
  };

  return (
    <ContextProvider value={value as SlideshowContextType}>
      {children}
    </ContextProvider>
  );
}

SlideshowContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useSlideshowContext };
