/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef */

import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import { ThemeContextProvider } from 'contexts/ThemeContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import { CardColorContextProvider } from 'contexts/CardColorContext';

import VerseMain from '../VerseMain';

function component() {
  return (
    <Router initialEntries={['/matthew-11:28-30']}>
      <CardColorContextProvider>
        <ThemeContextProvider>
          <SlideshowContextProvider>
            <VerseMain thisVerse={thisVerse} />
          </SlideshowContextProvider>
        </ThemeContextProvider>
      </CardColorContextProvider>
    </Router>
  );
}

describe('Settings dialog', () => {
  beforeEach(() => {
    render(component());
  });

  // eslint-disable-next-line jest/expect-expect
  test('settings popup can be opened and closed', () => {
    // Open
    const settingsIcon = document.getElementById('verse__settings-icon');
    fireEvent.click(settingsIcon);
    expectPopupIsActive('settings');
    expectPopupIsInactive('slideshow');
    expectPopupIsInactive('info');
    // Close
    const closeIcon = document.querySelector('.settings__close-icon');
    fireEvent.click(closeIcon);
    expectPopupIsInactive('settings');
  });

  // eslint-disable-next-line jest/expect-expect
  test('settings popup can be opened and closed with the <Enter> key', () => {
    // Open
    const settingsIcon = document.getElementById('verse__settings-icon');
    fireEvent.keyUp(settingsIcon, { key: 'h', code: 'KeyH' });
    expectPopupIsInactive('settings');
    fireEvent.keyUp(settingsIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsActive('settings');
    // Close
    const closeIcon = document.querySelector('.settings__close-icon');
    fireEvent.keyUp(closeIcon, { key: 'h', code: 'KeyH' });
    expectPopupIsActive('settings');
    fireEvent.keyUp(closeIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsInactive('settings');
  });

  // eslint-disable-next-line jest/expect-expect
  test('settings popup can be closed with the <Escape> key', () => {
    // Open
    const settingsIcon = document.getElementById('verse__settings-icon');
    fireEvent.keyUp(settingsIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsActive('settings');
    // Close
    fireEvent.keyUp(document, { key: 'h', code: 'KeyH' });
    expectPopupIsActive('settings');
    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
    expectPopupIsInactive('settings');
  });

  test('font is sans-serif by default', () => {
    const biblequote = document.getElementById('biblequote');
    const node = document.getElementById('select-verse-font');
    expect(node.value).toBe('sans-serif');
    expect(biblequote.classList.contains('verse__text--sans-serif')).toBe(true);
  });

  test('font can be changed to serif', () => {
    const settingsIcon = document.getElementById('verse__settings-icon');
    fireEvent.click(settingsIcon);
    const node = document.getElementById('select-verse-font');
    node.value = 'serif';
    Simulate.change(node);
    expect(node.value).toBe('serif');
    expect(biblequote.classList.contains('verse__text--serif')).toBe(true);
  });

  test('invalid font choice defaults to sans-serif', () => {
    const settingsIcon = document.getElementById('verse__settings-icon');
    fireEvent.click(settingsIcon);
    const node = document.getElementById('select-verse-font');
    const option = node.getElementsByTagName('option')[1];
    option.value = 'blah';
    node.value = 'blah';
    Simulate.change(node);
    expect(node.value).toBe('sans-serif');
  });

  test('theme is light by default', () => {
    const node = document.getElementById('select-theme');
    expect(node.value).toBe('light');
    const verseCard = document.querySelector('.verse__card');
    expect(verseCard.classList.contains('verse__card--light-10')).toBe(true);
  });

  test('theme can be changed to dark', () => {
    const settingsIcon = document.getElementById('verse__settings-icon');
    fireEvent.click(settingsIcon);
    const node = document.getElementById('select-theme');
    node.value = 'dark';
    Simulate.change(node);
    expect(node.value).toBe('dark');
    const verseCard = document.querySelector('.verse__card');
    expect(verseCard.classList.contains('verse__card--dark-10')).toBe(true);
  });

  test('invalid theme choice defaults to light', () => {
    const settingsIcon = document.getElementById('verse__settings-icon');
    fireEvent.click(settingsIcon);
    const node = document.getElementById('select-theme');
    const option = node.getElementsByTagName('option')[1];
    option.value = 'blah';
    node.value = 'blah';
    Simulate.change(node);
    expect(node.value).toBe('light');
    const verseCard = document.querySelector('.verse__card');
    expect(verseCard.classList.contains('verse__card--light-10')).toBe(true);
  });
});
