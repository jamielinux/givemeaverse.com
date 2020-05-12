/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef */

import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

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

describe('Info dialog', () => {
  beforeEach(() => {
    render(component());
  });

  // eslint-disable-next-line jest/expect-expect
  test('info popup can be opened and closed', () => {
    // Open
    const infoIcon = document.getElementById('verse__info-icon');
    fireEvent.click(infoIcon);
    expectPopupIsActive('info');
    expectPopupIsInactive('settings');
    expectPopupIsInactive('slideshow');
    // Close
    const closeIcon = document.querySelector('.info__close-icon');
    fireEvent.click(closeIcon);
    expectPopupIsInactive('info');
  });

  // eslint-disable-next-line jest/expect-expect
  test('info popup can be opened and closed with the <Enter> key', () => {
    // Open
    const infoIcon = document.getElementById('verse__info-icon');
    fireEvent.keyUp(infoIcon, { key: 'h', code: 'KeyH' });
    expectPopupIsInactive('info');
    fireEvent.keyUp(infoIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsActive('info');
    // Close
    const closeIcon = document.querySelector('.info__close-icon');
    fireEvent.keyUp(closeIcon, { key: 'h', code: 'KeyH' });
    expectPopupIsActive('info');
    fireEvent.keyUp(closeIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsInactive('info');
  });

  // eslint-disable-next-line jest/expect-expect
  test('info popup can be closed with the <Escape> key', () => {
    // Open
    const infoIcon = document.getElementById('verse__info-icon');
    fireEvent.keyUp(infoIcon, { key: 'Enter', code: 'Enter' });
    expectPopupIsActive('info');
    // Close
    fireEvent.keyUp(document, { key: 'h', code: 'KeyH' });
    expectPopupIsActive('info');
    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
    expectPopupIsInactive('info');
  });
});
