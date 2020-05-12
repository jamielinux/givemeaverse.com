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

describe('Verse control panel', () => {
  let getByText;
  let queryByText;
  beforeEach(() => {
    const rendered = render(component());
    getByText = rendered.getByText;
    queryByText = rendered.queryByText;
  });

  // eslint-disable-next-line jest/expect-expect
  test('content is visible and popups are hidden', () => {
    expectPopupsAreInactive();
  });

  const translations = [
    {
      id: 'esv',
      text: thisVerse.text.esv,
    },
    {
      id: 'kjv',
      text: thisVerse.text.kjv,
    },
    {
      id: 'niv',
      text: thisVerse.text.niv,
    },
  ];

  translations.forEach((item) => {
    const { id, text } = item;
    const upper = id.toUpperCase();
    test(`clicking the ${upper} button shows the correct translation`, () => {
      const button = document.getElementById(`verse__${id}`);
      fireEvent.click(button);
      expect(getByText(text)).toBeInTheDocument();
    });
  });

  translations.forEach((item) => {
    const { id, text } = item;
    const upper = id.toUpperCase();
    test(`pressing "h" has no effect on the ${upper} button`, () => {
      const button = document.getElementById(`verse__${id}`);
      fireEvent.keyUp(button, { key: 'h', code: 'h' });
      expect(queryByText(text)).not.toBeInTheDocument();
    });

    test(`pressing "Enter" works on the ${upper} button`, () => {
      const button = document.getElementById(`verse__${id}`);
      fireEvent.keyUp(button, { key: 'Enter', code: 'Enter' });
      expect(getByText(text)).toBeInTheDocument();
    });
  });

  ['settings', 'slideshow', 'info'].forEach((item) => {
    // eslint-disable-next-line jest/expect-expect
    test(`pressing "h" has no effect on the ${item} icon`, () => {
      const button = document.getElementById(`verse__${item}-icon`);
      fireEvent.keyUp(button, { key: 'h', code: 'h' });
      expectPopupIsInactive(item);
    });
  });
});
