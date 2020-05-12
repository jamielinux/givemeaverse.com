/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useState, useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_THEME, SUPPORTED_THEMES } from 'constants/index';
import { createCtx, unhideModal, readValidateStorage } from 'utils/index';

export type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeType;
  applyTheme: (theme: ThemeType) => void;
};

const [useThemeContext, ContextProvider] = createCtx<ThemeContextType>();

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [theme, setTheme] = useState(() =>
    readValidateStorage({
      name: 'theme',
      supportedSettings: SUPPORTED_THEMES,
      defaultValue: DEFAULT_THEME,
    }),
  );

  function applyTheme(requestedTheme: string): void {
    setTheme(requestedTheme);
    const otherTheme = requestedTheme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove(`html--${otherTheme}-theme`);
    document.documentElement.classList.add(`html--${requestedTheme}-theme`);
  }

  useLayoutEffect(() => {
    // ACCESSIBILITY: Hide elements from tab select and screen readers.
    // If the settings popup is open, re-hide elements after re-render.
    const content = document.getElementById('content');
    const modal = document.getElementById('settings');
    if (content && modal && !modal.hasAttribute('aria-hidden')) {
      unhideModal({ content, modal });
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme as string);
  }, [theme]);

  const value = { theme, applyTheme };

  return (
    <ContextProvider value={value as ThemeContextType}>
      {children}
    </ContextProvider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useThemeContext };
