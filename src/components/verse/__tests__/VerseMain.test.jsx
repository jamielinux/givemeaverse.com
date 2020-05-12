/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef */

import React from 'react';
import { Helmet } from 'react-helmet';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ThemeContextProvider } from 'contexts/ThemeContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import { CardColorContextProvider } from 'contexts/CardColorContext';

import VerseMain from '../VerseMain';

function component(initialEntries = ['/matthew-11:28-30']) {
  return (
    <Router initialEntries={initialEntries}>
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

describe('Verse page', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      verseId: 'matthew-11:28-30',
    }),
  }));

  test('document title is correct', () => {
    render(component());
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Matthew 11:28–30 — NIV');
  });

  test('verse text is displayed, defaulting to NIV', () => {
    const { getByText } = render(component());
    expect(getByText(thisVerse.text.niv)).toBeInTheDocument();
  });

  test('verse reference is correct', () => {
    const { getByText } = render(component());
    expect(getByText('Matthew 11:28–30')).toBeInTheDocument();
  });

  test('SNAPSHOT: verse page with default translation', () => {
    global.document.getElementById = () => {
      return {
        classList: {
          add: jest.fn(),
          remove: jest.fn(),
        },
        style: {
          setProperty: jest.fn(),
        },
        hasAttribute: jest.fn(),
        setAttribute: jest.fn(),
      };
    };
    const tree = renderer.create(component(), {
      createNodeMock: (element) => nodeMock(element),
    });
    const treeJSON = tree.toJSON();
    expect(treeJSON).toMatchSnapshot();
    delete global.document.getElementById;
  });

  test('correct verse text is displayed with ?translation=esv', () => {
    const initialEntries = ['/matthew-11:28-30?translation=esv'];
    const { getByText } = render(component(initialEntries));
    expect(getByText(thisVerse.text.esv)).toBeInTheDocument();
  });

  test('correct verse text is displayed with ?translation=kjv', () => {
    const initialEntries = ['/matthew-11:28-30?translation=kjv'];
    const { getByText } = render(component(initialEntries));
    expect(getByText(thisVerse.text.kjv)).toBeInTheDocument();
  });

  test('correct verse text is displayed with ?translation=niv', () => {
    const initialEntries = ['/matthew-11:28-30?translation=niv'];
    const { getByText } = render(component(initialEntries));
    expect(getByText(thisVerse.text.niv)).toBeInTheDocument();
  });

  /* eslint-disable-next-line jest/expect-expect */
  test('all clickable elements have "clickable" class, except the nav', () => {
    render(component());
    const events = getAllEventListeners();
    expectClickable(events);
  });
});
