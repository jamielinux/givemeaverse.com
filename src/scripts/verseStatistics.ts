/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-console */

import VerseData, { VerseDataType } from '../data/VerseData';

function getTotalVerses(): number {
  const totalVerses = VerseData.reduce((acc, cur) => {
    return acc + cur.numVerses;
  }, 0);
  return totalVerses;
}

function getLongestVerse(): number {
  const longestVerse: number = VerseData.reduce(
    (acc: number, cur: VerseDataType): number => {
      const longestTranslation: string = Object.values(cur.text).reduce(
        (accumulator: string, current: string): string => {
          return accumulator > current ? accumulator : current;
        },
      );
      return acc > longestTranslation.length ? acc : longestTranslation.length;
    },
    0,
  );
  return longestVerse;
}

function getShortestVerse(): number {
  const shortestVerse = VerseData.reduce(
    (acc: number, cur: VerseDataType): number => {
      const shortestTranslation = Object.values(cur.text).reduce(
        (accumulator, current) => {
          return accumulator < current ? accumulator : current;
        },
      );
      return acc !== 0 && acc < shortestTranslation.length
        ? acc
        : shortestTranslation.length;
    },
    0,
  );
  return shortestVerse;
}

function getMeanPassageLength(translation: 'esv' | 'kjv' | 'niv'): number {
  const totalLength = VerseData.reduce((acc, cur) => {
    return acc + cur.text[translation].length;
  }, 0);
  return Math.round(totalLength / VerseData.length);
}

// eslint-disable-next-line no-console
console.log(
  '\x1b[33m',
  `
  Verse Statistics
  ==> Total passages : ${VerseData.length}
  ==> Total verses   : ${getTotalVerses()}

  ==> Shortest verse : ${getShortestVerse()} characters
  ==> Longest verse  : ${getLongestVerse()} characters
  ==> Mean NIV length: ${getMeanPassageLength('niv')} characters
  ==> Mean ESV length: ${getMeanPassageLength('esv')} characters
  ==> Mean KJV length: ${getMeanPassageLength('kjv')} characters
`,
);
