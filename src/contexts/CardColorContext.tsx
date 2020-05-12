/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NUM_VERSE_COLORS } from 'constants/index';
import { createCtx } from 'utils/index';

type CardColorContextType = {
  verseCardColor: number;
};

export type LocationStateType = {
  verseCardColor?: number;
  avoidColor?: number;
  avoidVerseId?: string;
};

const [useCardColorContext, ContextProvider] = createCtx<
  CardColorContextType
>();

export function CardColorContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { state }: { state: LocationStateType } = useLocation();

  // Avoid using the same color twice in a row.
  function getRandomColor(): number {
    if (state && typeof state.verseCardColor !== 'undefined') {
      // If just switching translation, keep the same verseCardColor.
      return state.verseCardColor;
    }

    if (
      typeof state !== 'undefined' &&
      typeof state.avoidColor !== 'undefined'
    ) {
      // If there's a previous color, pick a random color except that one.
      const filteredColors = Array.from(Array(NUM_VERSE_COLORS).keys()).filter(
        (color) => color !== state.avoidColor,
      );
      return filteredColors[Math.floor(Math.random() * filteredColors.length)];
    }

    // If no previous color, return any random color.
    return Math.floor(Math.random() * NUM_VERSE_COLORS);
  }
  const verseCardColor = getRandomColor();
  const value = { verseCardColor };
  return (
    <ContextProvider value={value as CardColorContextType}>
      {children}
    </ContextProvider>
  );
}

CardColorContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useCardColorContext };
