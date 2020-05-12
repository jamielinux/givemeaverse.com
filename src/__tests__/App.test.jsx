/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef, no-console */

import React from 'react';
import { Helmet } from 'react-helmet';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { ThemeContextProvider } from 'contexts/ThemeContext';
import { CardColorContextProvider } from 'contexts/CardColorContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import App from '../App';

function component(initialEntries) {
  return (
    <Router initialEntries={initialEntries}>
      <ThemeContextProvider>
        <CardColorContextProvider>
          <SlideshowContextProvider>
            <App />
          </SlideshowContextProvider>
        </CardColorContextProvider>
      </ThemeContextProvider>
    </Router>
  );
}

const pageNotFound = '404 — Page Not Found';

describe('App', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: (): { verseId: string } => ({
      verseId: 'ezra-8:23',
    }),
  }));

  test('document title is correct', () => {
    const initialEntries = ['/'];
    render(component(initialEntries));
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Give Me A Verse');
  });

  test('displays the home page by default', () => {
    const initialEntries = ['/'];
    const { getByText } = render(component(initialEntries));
    expect(getByText('random verse')).toBeInTheDocument();
  });

  test('/blah should display 404 page', () => {
    const initialEntries = ['/blah'];
    const { queryByText } = render(component(initialEntries));
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual(pageNotFound);
    expect(queryByText(pageNotFound)).toBeInTheDocument();
    expect(queryByText('random verse')).not.toBeInTheDocument();
  });

  test('/aboutt should display 404 page', () => {
    const initialEntries = ['/aboutt'];
    const { queryByText } = render(component(initialEntries));
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual(pageNotFound);
    expect(queryByText(pageNotFound)).toBeInTheDocument();
    expect(queryByText('random verse')).not.toBeInTheDocument();
  });

  test('/about should display the About page', () => {
    const initialEntries = ['/about'];
    const { queryByText } = render(component(initialEntries));
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Give Me A Verse — About');
    expect(queryByText(pageNotFound)).not.toBeInTheDocument();
    expect(queryByText('random verse')).toBeInTheDocument();
  });

  test('/contact should display the Contact page', () => {
    const initialEntries = ['/contact'];
    const { queryByText } = render(component(initialEntries));
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Give Me A Verse — Contact');
    expect(queryByText(pageNotFound)).not.toBeInTheDocument();
    expect(queryByText('email')).toBeInTheDocument();
  });

  test('/ezra-8:23 should display the verse', () => {
    const initialEntries = ['/ezra-8:23'];
    const { queryByText } = render(component(initialEntries));
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Ezra 8:23 — NIV');
    expect(queryByText(pageNotFound)).not.toBeInTheDocument();
  });

  test('/ezra-8:23/blah should display 404 page', () => {
    const initialEntries = ['/ezra-8:23/blah'];
    const { queryByText } = render(component(initialEntries));
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual(pageNotFound);
    expect(queryByText(pageNotFound)).toBeInTheDocument();
    expect(queryByText('random verse')).not.toBeInTheDocument();
  });
});
