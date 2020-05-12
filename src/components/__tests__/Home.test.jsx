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
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CardColorContextProvider } from 'contexts/CardColorContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import Home from '../Home';

// NB: We've overridden Math.random in setupTests.js to always return 0.5.
// This mocked VerseData has only two verses.
jest.mock('data/VerseData');

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

describe('Home page', () => {
  let history;
  let getByText;
  beforeEach(() => {
    history = createMemoryHistory();
    getByText = render(component(history)).getByText;
  });

  test('document title is correct', () => {
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Give Me A Verse');
  });

  test('SNAPSHOT: home page', () => {
    const tree = renderer.create(component(history));
    const treeJSON = tree.toJSON();
    expect(treeJSON).toMatchSnapshot();
  });

  test('random verse link can be clicked', () => {
    const link = getByText('random verse');
    fireEvent.click(link);
    expect(history.location.pathname).toBe('/random');
  });

  test('give me a verse button can be clicked', () => {
    const button = document.querySelector('button');
    fireEvent.click(button);
    expect(history.location.pathname).toBe('/ezra-8:23');
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
  test('menu can be opened and closed with the <Enter> key', () => {
    const menuIcon = document.getElementById('header__menu-icon');
    fireEvent.keyUp(menuIcon, { key: 'h', code: 'KeyH' });
    expectNavIsInactive();
    fireEvent.keyUp(menuIcon, { key: 'Enter', code: 'Enter' });
    expectNavIsActive();
    const closeIcon = document.querySelector('.nav__close-icon');
    fireEvent.keyUp(closeIcon, { key: 'h', code: 'KeyH' });
    expectNavIsActive();
    fireEvent.keyUp(closeIcon, { key: 'Enter', code: 'Enter' });
    expectNavIsInactive();
  });

  // eslint-disable-next-line jest/expect-expect
  test('menu can be opened and closed', () => {
    expectMenuCanBeOpenedAndClosed();
  });

  test('links in the menu are functional', () => {
    const links = {
      About: '/about',
      Contact: '/contact',
      Home: '/',
    };
    Object.keys(links).forEach((key) => {
      fireEvent.click(document.getElementById('header__menu-icon'));
      const pathname = links[key];
      const element = document.getElementById(`${key.toLowerCase()}-link`);
      expect(element).toHaveAttribute('aria-label');
      expect(element).toHaveAttribute('href', pathname);
      fireEvent.click(element);
      expect(history.location.pathname).toBe(pathname);
    });
  });
});
