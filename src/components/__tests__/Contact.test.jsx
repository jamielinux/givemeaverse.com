/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CardColorContextProvider } from 'contexts/CardColorContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import Contact from '../Contact';

function component(history) {
  return (
    <Router history={history}>
      <CardColorContextProvider>
        <SlideshowContextProvider>
          <Contact />
        </SlideshowContextProvider>
      </CardColorContextProvider>
    </Router>
  );
}

describe('Contact page', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
    render(component(history));
  });

  test('document title is correct', () => {
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Give Me A Verse — Contact');
  });

  test('SNAPSHOT: contact page', () => {
    const tree = renderer.create(component(history));
    const treeJSON = tree.toJSON();
    expect(treeJSON).toMatchSnapshot();
  });

  // eslint-disable-next-line jest/expect-expect
  test('all clickable elements have "clickable" class, except the nav', () => {
    const events = getAllEventListeners();
    expectClickable(events);
  });

  // eslint-disable-next-line jest/expect-expect
  test('menu is hidden to begin with', () => {
    expectNavIsInactive();
  });

  // eslint-disable-next-line jest/expect-expect
  test('menu can be opened and closed', () => {
    expectMenuCanBeOpenedAndClosed();
  });
});
