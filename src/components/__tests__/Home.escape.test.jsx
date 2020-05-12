/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef */

import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';

import { CardColorContextProvider } from 'contexts/CardColorContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import Home from 'components/Home';

function component(history) {
  return (
    <Router history={history}>
      <CardColorContextProvider>
        <SlideshowContextProvider>
          <Home />
        </SlideshowContextProvider>
      </CardColorContextProvider>
    </Router>
  );
}

describe('Home page <Escape> key', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
    render(component(history));
  });

  // eslint-disable-next-line jest/expect-expect
  test('menu can be closed with the <Escape> key', () => {
    const menuIcon = document.getElementById('header__menu-icon');
    fireEvent.keyUp(menuIcon, { key: 'Enter', code: 'Enter' });
    expectNavIsActive();
    fireEvent.keyUp(document, { key: 'h', code: 'KeyH' });
    expectNavIsActive();
    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
    expectNavIsInactive();
  });
});
