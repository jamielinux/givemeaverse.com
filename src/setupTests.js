/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undef, no-console */

import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent } from '@testing-library/react';

global.afterEach(() => {
  cleanup();
});

global.Math.random = () => 0.5;
global.scrollTo = jest.fn();

function logError(msg, item) {
  console.log(
    '\x1b[31m',
    `
          ===> ${msg}
          ===>     ${item}
    `,
  );
}

// Needed when using `renderer` for components with `useRef`.
global.nodeMock = (element) => {
  if (
    element.props.role === 'button' ||
    element.props.type === 'button' ||
    element.props.role === 'none'
  ) {
    return {
      blur: jest.fn(),
      classList: {
        add: jest.fn(),
        remove: jest.fn(),
      },
    };
  }
  return null;
};

global.expectNavIsInactive = () => {
  const { body } = document;
  expect(body).not.toHaveClass('body--is-inactive');
  const nav = document.getElementById('nav');
  expect(nav).not.toHaveClass('nav--is-active');

  const settings = document.getElementById('settings');
  const slideshow = document.getElementById('slideshow');
  const info = document.getElementById('info');
  const clickable = document.getElementsByClassName('clickable');
  Array.from(clickable).forEach((element) => {
    const hidden = element.hasAttribute('aria-hidden');
    if (
      (settings && settings.contains(element)) ||
      (slideshow && slideshow.contains(element)) ||
      (info && info.contains(element)) ||
      (nav && nav.contains(element))
    ) {
      if (!hidden) {
        logError(
          'Element with this class is missing an aria-hidden attribute:',
          element.className,
        );
      }
      expect(hidden).toBe(true);
    } else if (hidden) {
      logError(
        'Element with this class has a stray aria-hidden attribute:',
        element.className,
      );
      expect(hidden).toBe(false);
    }
  });
};

global.expectNavIsActive = () => {
  const { body } = document;
  expect(body).toHaveClass('body--is-inactive');
  const nav = document.getElementById('nav');
  expect(nav).toHaveClass('nav--is-active');

  const clickable = document.getElementsByClassName('clickable');
  Array.from(clickable).forEach((element) => {
    const hidden = element.getAttribute('aria-hidden') === 'true';
    if (nav.contains(element)) {
      if (hidden) {
        logError(
          'Element with this class has a stray aria-hidden attribute:',
          element.className,
        );
      }
      expect(hidden).toBe(false);
    } else if (!hidden) {
      logError(
        'Element with this class is missing an aria-hidden attribute:',
        element.className,
      );
      expect(hidden).toBe(true);
    }
  });
};

global.expectClickable = (events) => {
  events.forEach((event) => {
    if (event.node.parentNode.querySelector('[class*=nav]') === null) {
      const clickable = event.node.classList.contains('clickable');
      if (!clickable) {
        logError(
          'Element with this class is missing `clickable` class:',
          event.node.className,
        );
      }
      expect(clickable).toBe(true);
    }
  });
};

global.expectMenuCanBeOpenedAndClosed = () => {
  fireEvent.click(document.getElementById('header__menu-icon'));
  expectNavIsActive();
  fireEvent.click(document.querySelector('.nav__close-icon'));
  expectNavIsInactive();
};

global.expectPopupsAreInactive = () => {
  const settings = document.getElementById('settings');
  const slideshow = document.getElementById('slideshow');
  const info = document.getElementById('info');

  const clickable = document.getElementsByClassName('clickable');
  Array.from(clickable).forEach((element) => {
    const hidden = element.getAttribute('aria-hidden') === 'true';
    const tabindex = element.getAttribute('tabindex') === '-1';
    if (
      settings.contains(element) ||
      slideshow.contains(element) ||
      info.contains(element) ||
      nav.contains(element)
    ) {
      if (!hidden) {
        logError(
          'Element with this class is missing an aria-hidden attribute:',
          element.className,
        );
      }
      expect(hidden).toBe(true);
      if (!tabindex) {
        logError(
          "Element with this class is missing a tabindex='-1' attribute:",
          element.className,
        );
      }
      expect(tabindex).toBe(true);
    } else {
      if (hidden) {
        logError(
          'Element with this class has a stray aria-hidden attribute:',
          element.className,
        );
      }
      expect(hidden).toBe(false);
      if (element.classList.contains('verse__translation--is-active')) {
        if (!tabindex) {
          logError(
            "Element with this class is missing a tabindex='-1' attribute:",
            element.className,
          );
        }
        expect(tabindex).toBe(true);
      } else {
        if (tabindex) {
          logError(
            "Element with this class has a stray tabindex='-1' attribute:",
            element.className,
          );
        }
        expect(tabindex).toBe(false);
      }
    }
  });
};

global.expectPopupIsActive = (name) => {
  const content = document.getElementById('content');
  expect(content).toHaveClass('content--is-inactive');

  const popup = document.getElementById(name);

  const clickable = document.getElementsByClassName('clickable');
  Array.from(clickable).forEach((element) => {
    const hidden = element.getAttribute('aria-hidden') === 'true';
    const tabindex = element.getAttribute('tabindex') === '-1';
    if (popup.contains(element)) {
      if (hidden) {
        logError(
          'Element with this class has a stray aria-hidden attribute:',
          element.className,
        );
      }
      expect(hidden).toBe(false);
      if (tabindex) {
        logError(
          "Element with this class has a stray tabindex='-1' attribute:",
          element.className,
        );
      }
      expect(tabindex).toBe(false);
    } else {
      if (!hidden) {
        logError(
          'Element with this class is missing an aria-hidden attribute:',
          element.className,
        );
      }
      expect(hidden).toBe(true);
      if (!tabindex) {
        logError(
          "Element with this class is missing a tabindex='-1' attribute:",
          element.className,
        );
      }
      expect(tabindex).toBe(true);
    }
  });
};

global.expectPopupIsInactive = (name) => {
  const popup = document.getElementById(name);
  expect(popup).not.toHaveClass(`${name}--is-active`);
  expect(popup).toHaveAttribute('aria-hidden');
};

global.thisVerse = {
  id: 'matthew-11:28-30',
  book: 'Matthew',
  chapter: 11,
  startVerse: 28,
  numVerses: 3,
  text: {
    esv:
      '“Come to me, all who labor and are heavy laden, and I will give ' +
      'you rest. Take my yoke upon you, and learn from me, for I am ' +
      'gentle and lowly in heart, and you will find rest for your souls. ' +
      'For my yoke is easy, and my burden is light.”',
    kjv:
      '“Come unto me, all ye that labour and are heavy laden, and I will ' +
      'give you rest. Take my yoke upon you, and learn of me; for I am ' +
      'meek and lowly in heart: and ye shall find rest unto your souls. ' +
      'For my yoke is easy, and my burden is light.”',
    niv:
      '“Come to me, all you who are weary and burdened, and I will give ' +
      'you rest. Take my yoke upon you and learn from me, for I am gentle ' +
      'and humble in heart, and you will find rest for your souls. For my ' +
      'yoke is easy and my burden is light.”',
  },
};

global.getAllEventListeners = () => {
  const events = Object.keys(window).filter((key) => key.startsWith('on'));
  return [...document.querySelectorAll('*'), document].flatMap((node) =>
    events
      .filter((event) => node[event])
      .map((event) => {
        return {
          node,
          event,
          listener:
            typeof node[event] === 'function'
              ? node[event].toString()
              : node[event],
        };
      }),
  );
};
