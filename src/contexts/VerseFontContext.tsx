/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_VERSE_FONT, SUPPORTED_VERSE_FONTS } from 'constants/index';
import { createCtx, readValidateStorage } from 'utils/index';

export type VerseFontType = 'sans-serif' | 'serif';

type VerseFontContextType = {
  verseFont: VerseFontType;
  setVerseFont: (verseFont: VerseFontType) => void;
};

const [useVerseFontContext, ContextProvider] = createCtx<
  VerseFontContextType
>();

export function VerseFontContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [verseFont, setVerseFont] = useState(() =>
    readValidateStorage({
      name: 'verseFont',
      supportedSettings: SUPPORTED_VERSE_FONTS,
      defaultValue: DEFAULT_VERSE_FONT,
    }),
  );

  useEffect(() => {
    if (verseFont && SUPPORTED_VERSE_FONTS.indexOf(verseFont)) {
      localStorage.setItem('verseFont', verseFont);
    }
  }, [verseFont]);

  const value = { verseFont, setVerseFont };

  return (
    <ContextProvider value={value as VerseFontContextType}>
      {children}
    </ContextProvider>
  );
}

VerseFontContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useVerseFontContext };
