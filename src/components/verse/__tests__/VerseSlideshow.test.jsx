/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef */

import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import { ThemeContextProvider } from 'contexts/ThemeContext';
import { CardColorContextProvider } from 'contexts/CardColorContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import RandomVerse from 'components/RandomVerse';
import Verse from 'components/verse/index';

beforeEach(() => {
  jest.useFakeTimers();
});

// NB: We've overridden Math.random in setupTests.js to always return 0.5.
// This mocked VerseData has only two verses.
jest.mock('data/VerseData');

function component(history) {
  return (
    <Router history={history} initialEntries={['/random']}>
      <ThemeContextProvider>
        <CardColorContextProvider>
          <Switch>
            <Route exact path="/random">
              <RandomVerse />
            </Route>
            <Route exact path="/:verseId">
              <SlideshowContextProvider>
                <Verse />
              </SlideshowContextProvider>
            </Route>
          </Switch>
        </CardColorContextProvider>
      </ThemeContextProvider>
    </Router>
  );
}

describe('Slideshow dialog', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/random');
    render(component(history));
  });

  // eslint-disable-next-line jest/expect-expect
  test('slideshow popup can be opened and closed', () => {
    // Open
    fireEvent.click(document.getElementById('verse__slideshow-icon'));
    expectPopupIsActive('slideshow');
    expectPopupIsInactive('settings');
    expectPopupIsInactive('info');
    // Close
    fireEvent.click(document.querySelector('.slideshow__close-icon'));
    expectPopupIsInactive('slideshow');
  });

  // eslint-disable-next-line jest/expect-expect
  test('slideshow popup can be opened and closed with the <Enter> key', () => {
    // Open
    const slideshowIcon = document.getElementById('verse__slideshow-icon');
    fireEvent.keyUp(slideshowIcon, { key: 'h', code: 'KeyH' });
    expectPopupIsInactive('slideshow');
    fireEvent.keyUp(slideshowIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsActive('slideshow');
    // Close
    const closeIcon = document.querySelector('.slideshow__close-icon');
    fireEvent.keyUp(closeIcon, { key: 'h', code: 'KeyH' });
    expectPopupIsActive('slideshow');
    fireEvent.keyUp(closeIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsInactive('slideshow');
  });

  // eslint-disable-next-line jest/expect-expect
  test('slideshow popup can be closed with the <Escape> key', () => {
    // Open
    const slideshowIcon = document.getElementById('verse__slideshow-icon');
    fireEvent.keyUp(slideshowIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsActive('slideshow');
    // Close
    fireEvent.keyUp(document, { key: 'h', code: 'KeyH' });
    expectPopupIsActive('slideshow');
    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
    expectPopupIsInactive('slideshow');
  });

  test('slideshow popup <Escape> key eventListener is properly cleaned up', () => {
    const listenersBefore = getAllEventListeners().length;
    expect(listenersBefore).toBeGreaterThan(0);
    // Open
    const slideshowIcon = document.getElementById('verse__slideshow-icon');
    fireEvent.keyUp(slideshowIcon, { key: 'Enter', code: 'Enter' });
    expect(getAllEventListeners()).toHaveLength(listenersBefore + 1);
    // Close
    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
    expect(getAllEventListeners()).toHaveLength(listenersBefore);
  });

  test('slideshow interval is disabled by default', () => {
    fireEvent.click(document.getElementById('verse__slideshow-icon'));
    const node = document.getElementById('select-slideshow-interval');
    expect(node.value).toBe('-1');
  });

  test('slideshow interval cannot be set to 11s', () => {
    fireEvent.click(document.getElementById('verse__slideshow-icon'));
    const node = document.getElementById('select-slideshow-interval');
    const option = node.getElementsByTagName('option')[1];
    option.value = '11';
    node.value = '11';
    Simulate.change(node);
    expect(node.value).toBe('-1');
  });

  test('slideshow interval cannot be set to 11s, closing with <Escape> key', () => {
    fireEvent.click(document.getElementById('verse__slideshow-icon'));
    const node = document.getElementById('select-slideshow-interval');
    const option = node.getElementsByTagName('option')[1];
    option.value = '11';
    node.value = '11';
    Simulate.change(node);
    fireEvent.keyUp(document, { key: 'h', code: 'h' });
    expectPopupIsActive('slideshow');
    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
    expectPopupIsInactive('slideshow');
    expect(node.value).toBe('-1');
  });

  function expectVerseToChangeAfterInterval() {
    // After 5 seconds, verses should still be the same.
    jest.advanceTimersByTime(5000);
    expect(history.location.pathname).toBe('/ezra-8:23');
    // After another 5 seconds, verse should have changed.
    jest.advanceTimersByTime(5000);
    expect(history.location.pathname).toBe('/matthew-11:28-30');
    // Slideshow is still enabled.
    jest.advanceTimersByTime(10000);
    expect(history.location.pathname).toBe('/ezra-8:23');
  }

  test('slideshow interval can be set to 10s and executes correctly', () => {
    fireEvent.click(document.getElementById('verse__slideshow-icon'));
    const node = document.getElementById('select-slideshow-interval');
    node.value = '10';
    Simulate.change(node);
    expect(node.value).toBe('10');
    fireEvent.click(document.querySelector('.slideshow__close-icon'));
    expectPopupIsInactive('slideshow');
    expectVerseToChangeAfterInterval();
  });

  test('slideshow interval changes work if closing popup with <Escape> key', () => {
    function toTen() {
      fireEvent.click(document.getElementById('verse__slideshow-icon'));
      const node = document.getElementById('select-slideshow-interval');
      // Set interval to 10s.
      node.value = '10';
      Simulate.change(node);
      expect(node.value).toBe('10');
      fireEvent.keyUp(document, { key: 'h', code: 'h' });
      expectPopupIsActive('slideshow');
      fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
      expectPopupIsInactive('slideshow');
      expectVerseToChangeAfterInterval();
    }
    function toDisabled() {
      // Set interval to disabled.
      fireEvent.click(document.getElementById('verse__slideshow-icon'));
      const node = document.getElementById('select-slideshow-interval');
      node.value = '-1';
      Simulate.change(node);
      expect(node.value).toBe('-1');
      fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
      expectPopupIsInactive('slideshow');
      // After 15 seconds, verses should still be the same.
      jest.advanceTimersByTime(15000);
      expect(history.location.pathname).toBe('/ezra-8:23');
    }
    toTen();
    toDisabled();
  });

  function expectSlideshowPaused({ clickToOpen, clickToClose }) {
    fireEvent.click(document.getElementById('verse__slideshow-icon'));
    const node = document.getElementById('select-slideshow-interval');
    node.value = '10';
    Simulate.change(node);
    expect(node.value).toBe('10');
    fireEvent.click(document.querySelector('.slideshow__close-icon'));
    expectPopupIsInactive('slideshow');
    // After 5 seconds, verses should still be the same.
    jest.advanceTimersByTime(5000);
    expect(history.location.pathname).toBe('/ezra-8:23');
    // Open a modal and the verse should remain the same.
    fireEvent.click(document.getElementById(clickToOpen));
    jest.advanceTimersByTime(10000);
    expect(history.location.pathname).toBe('/ezra-8:23');
    // Close the modal and the verse should change.
    fireEvent.click(document.querySelector(clickToClose));
    jest.advanceTimersByTime(5000);
    expect(history.location.pathname).toBe('/matthew-11:28-30');
    // Slideshow is still enabled.
    jest.advanceTimersByTime(10000);
    expect(history.location.pathname).toBe('/ezra-8:23');
  }

  // eslint-disable-next-line jest/expect-expect
  test('slideshow is paused when a popup is open', () => {
    expectSlideshowPaused({
      clickToOpen: 'verse__slideshow-icon',
      clickToClose: '.slideshow__close-icon',
    });
  });

  // eslint-disable-next-line jest/expect-expect
  test('slideshow is paused when the menu is open', () => {
    expectSlideshowPaused({
      clickToOpen: 'header__menu-icon',
      clickToClose: '.nav__close-icon',
    });
  });
});
