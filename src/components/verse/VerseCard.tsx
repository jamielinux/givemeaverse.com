/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { BOOKS, LONGEST_VERSE } from 'constants/index';
import { VerseDataType } from 'data/VerseData';
import { useThemeContext } from 'contexts/ThemeContext';
import { useVerseFontContext } from 'contexts/VerseFontContext';
import { useCardColorContext } from 'contexts/CardColorContext';
import { useTranslationContext } from 'contexts/TranslationContext';

export default function VerseCard({
  thisVerse,
  buttonRef,
}: {
  thisVerse: VerseDataType;
  buttonRef: React.RefObject<HTMLButtonElement>;
}): React.ReactElement {
  const { theme } = useThemeContext();
  const { verseFont } = useVerseFontContext();
  const { verseCardColor } = useCardColorContext();
  const { translation } = useTranslationContext();

  const endVerse =
    thisVerse.numVerses > 1
      ? thisVerse.startVerse + thisVerse.numVerses - 1
      : thisVerse.startVerse;
  const verseRange =
    thisVerse.startVerse === endVerse
      ? `${thisVerse.startVerse}`
      : `${thisVerse.startVerse}–${endVerse}`;
  const reference = `${thisVerse.book} ${thisVerse.chapter}:${verseRange}`;

  const text = thisVerse.text[translation];
  const metaDescription = text.replace(/LORD/g, 'Lord');

  // replace the last space character with a non-breaking space to prevent the
  // last line of the verse/passage only having one lonely word.
  const textNbsp = text.replace(/ ([^ ]*)$/, ' $1');

  // The word LORD in the Bible (different from Lord) is stylised with small
  // caps. To differentiate between LORD and Lord, VerseData.js stores the word
  // "LORD" as uppercase letters (since small caps are a style, not actual
  // unicode characters). We can then deal with it properly here. As this is JSX
  // and we're inserting <span> elements, we have to push to an array.
  const textArray = textNbsp.split('LORD');
  const verseText = [];
  if (textArray.length > 1) {
    textArray.forEach((item, key, array) => {
      // If the first word of the verse is LORD, the first item in the array is
      // an empty string (ie, length === 0).
      if (item.length > 0) {
        verseText.push(item);
      }

      // The last item can never be the word LORD, as every verse ends with some
      // kind of punctuation.
      if (item.length === 0 || !Object.is(array.length - 1, key)) {
        /* eslint-disable react/no-array-index-key */
        verseText.push(
          <span key={`${thisVerse.id}-${key}`} className="small-caps">
            Lord
          </span>,
        );
        /* eslint-enable react/no-array-index-key */
      }
    });
  } else {
    // No occurrences of the word LORD.
    verseText.push(textNbsp);
  }

  useLayoutEffect(() => {
    const verseLength = textNbsp.length;
    // This adjustment factor scales up the font size of the verse text
    // depending on how short the verse is compared to the longest verse in
    // VerseData.js. Round roughly to two decimal places.
    const adjustmentFactor = `${
      Math.round(100 * (LONGEST_VERSE / verseLength)) / 100
    }px`;
    const bibleQuote = document.getElementById(
      'biblequote',
    ) as HTMLQuoteElement;
    bibleQuote.style.setProperty('--font-size-adjustment', adjustmentFactor);
  }, [textNbsp.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const button = buttonRef.current as HTMLButtonElement;
    button.blur();
  }, [buttonRef, thisVerse]);

  return (
    <>
      <Helmet>
        <title>{`${reference} — ${translation.toUpperCase()}`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <section className="verse__outer">
        <div className="verse__inner">
          <article
            className={`verse__card  verse__card--${theme}-${verseCardColor}`}
          >
            <blockquote
              id="biblequote"
              className={`verse__text  verse__text--${verseFont}`}
              aria-live="polite"
            >
              {verseText}
            </blockquote>
            <cite className="verse__reference">{reference}</cite>
          </article>
        </div>
      </section>
    </>
  );
}

VerseCard.propTypes = {
  thisVerse: PropTypes.shape({
    id: PropTypes.string.isRequired,
    book: PropTypes.oneOf(BOOKS).isRequired,
    chapter: PropTypes.number.isRequired,
    startVerse: PropTypes.number.isRequired,
    numVerses: PropTypes.number.isRequired,
    text: PropTypes.shape({
      esv: PropTypes.string.isRequired,
      kjv: PropTypes.string.isRequired,
      niv: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  buttonRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};
