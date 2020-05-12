/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useLayoutEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useThemeContext } from 'contexts/ThemeContext';
import { RANDOM_VERSE_PATHNAME } from 'constants/index';

import PageNotFound from 'components/PageNotFound';
import Home from 'components/Home';
import About from 'components/About';
import Contact from 'components/Contact';
import RandomVerse from 'components/RandomVerse';
import Verse from 'components/verse/index';

const App = (): React.ReactElement => {
  const { theme, applyTheme } = useThemeContext();

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [applyTheme, theme]);

  // :verseId is in the format: `numbers-6:24-26`
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path={RANDOM_VERSE_PATHNAME}>
        <RandomVerse />
      </Route>
      <Route exact path="/:verseId">
        <Verse />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default App;
