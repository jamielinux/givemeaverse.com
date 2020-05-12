/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef, react/prop-types */

import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ThemeContextProvider } from 'contexts/ThemeContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import { CardColorContextProvider } from 'contexts/CardColorContext';

import VerseMain from '../VerseMain';

function component({ history, thisVerse }) {
  return (
    <Router history={history}>
      <CardColorContextProvider>
        <ThemeContextProvider>
          <SlideshowContextProvider>
            <Route exact path="/:verseId">
              <VerseMain thisVerse={thisVerse} />
            </Route>
          </SlideshowContextProvider>
        </ThemeContextProvider>
      </CardColorContextProvider>
    </Router>
  );
}

describe('Verse card', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
  });

  describe('Handle the word LORD', () => {
    const thisVerse = {
      id: 'psalm-9:9-10',
      book: 'Psalm',
      chapter: 9,
      startVerse: 9,
      numVerses: 2,
      text: {
        esv:
          'The LORD is a stronghold for the oppressed, a stronghold in ' +
          ' times of trouble. And those who know your name put their trust' +
          ' in you, for you, O LORD, have not forsaken those who seek you.',
        kjv:
          'The LORD also will be a refuge for the oppressed, a refuge in' +
          ' times of trouble. And they that know thy name will put their' +
          ' trust in thee: for thou, LORD, hast not forsaken them that ' +
          ' seek thee.',
        niv:
          'The LORD is a refuge for the oppressed, a stronghold in times of' +
          ' trouble. Those who know your name trust in you, for you, LORD,' +
          ' have never forsaken those who seek you.',
      },
    };

    test('there are no instances of the capitalized word LORD', () => {
      history.push('/psalm-9:9-10');
      const { queryByText } = render(component({ history, thisVerse }));
      expect(queryByText('LORD')).not.toBeInTheDocument();
    });

    test('there are two instances of the word Lord in small caps', () => {
      history.push('/psalm-9:9-10');
      render(component({ history, thisVerse }));
      const instances = document.getElementsByClassName('small-caps');
      expect(instances).toHaveLength(2);
      Array.from(instances).forEach((item) => {
        expect(item.textContent).toBe('Lord');
      });
    });

    test('SNAPSHOT: verse card with Lord displayed in small caps ', () => {
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
      history.push('/psalm-9:9-10');
      const tree = renderer.create(component({ history, thisVerse }), {
        createNodeMock: (element) => nodeMock(element),
      });
      const treeJSON = tree.toJSON();
      expect(treeJSON).toMatchSnapshot();
      delete global.document.getElementById;
    });
  });

  describe('Handle the word LORD at the beginning of the passage', () => {
    test('SNAPSHOT: verse starting with LORD is handled correctly', () => {
      const anotherVerse = {
        id: 'isaiah-25:1',
        book: 'Isaiah',
        chapter: 25,
        startVerse: 1,
        numVerses: 1,
        text: {
          esv:
            'O LORD, you are my God; I will exalt you; I will praise your ' +
            'name, for you have done wonderful things, plans formed of old, ' +
            'faithful and sure.',
          kjv:
            'O LORD, thou art my God; I will exalt thee, I will praise thy ' +
            'name; for thou hast done wonderful things; thy counsels of old ' +
            'are faithfulness and truth.',
          niv:
            'LORD, you are my God; I will exalt you and praise your name, ' +
            'for in perfect faithfulness you have done wonderful ' +
            'things, things planned long ago.',
        },
      };

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
      history.push('/isaiah-25:1');
      const tree = renderer.create(
        component({ history, thisVerse: anotherVerse }),
        {
          createNodeMock: (element) => nodeMock(element),
        },
      );
      const treeJSON = tree.toJSON();
      expect(treeJSON).toMatchSnapshot();
      delete global.document.getElementById;
    });
  });

  describe('Handle next verse', () => {
    test('the next random verse maintains translation choice', () => {
      history.push('/matthew-11:28-30');
      const { queryByText } = render(component({ history, thisVerse }));
      const kjvButton = document.getElementById('verse__kjv');
      fireEvent.click(kjvButton);
      const button = document.querySelector('.give-me-a-verse__button');
      fireEvent.click(button);
      expect(queryByText(thisVerse.text.kjv)).toBeInTheDocument();
    });

    test('the next random verse has a different color', () => {
      history.push('/matthew-11:28-30');
      render(component({ history, thisVerse }));
      const verseCard = document.querySelector('.verse__card');
      expect(verseCard.classList.contains('verse__card--light-10')).toBe(true);
      const button = document.querySelector('.give-me-a-verse__button');
      fireEvent.click(button);
      expect(verseCard.classList.contains('verse__card--light-10')).toBe(false);
    });
  });
});
