/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef */

import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import RandomVerse from '../RandomVerse';

// NB: We've overridden Math.random in setupTests.js to always return 0.5.
// This mocked VerseData has only two verses.
jest.mock('data/VerseData');

function component(history) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/random">
          <RandomVerse />
        </Route>
        <Route>
          <h1>Verse</h1>
        </Route>
      </Switch>
    </Router>
  );
}

describe('RandomVerse redirector', () => {
  test('generates a random verse id', () => {
    const history = createMemoryHistory();
    history.push('/random');
    render(component(history));
    expect(history.location.pathname).toBe('/ezra-8:23');
  });
});
