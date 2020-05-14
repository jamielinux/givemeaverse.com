/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Tool to sort the VerseData according to book, chapter and starting verse.
// This isn't used at runtime, only to sort VerseData after adding more verses.
// It's not really necessary, but means it's easy to see the spread of verses.

import { BOOKS } from '../constants/index';
import VerseData from '../data/VerseData';

const sortedArray = VerseData.sort((first, second) => {
  const firstBookIndex = BOOKS.indexOf(first.book);
  const secondBookIndex = BOOKS.indexOf(second.book);

  if (firstBookIndex < secondBookIndex) {
    return -1;
  }
  if (firstBookIndex === secondBookIndex) {
    if (first.chapter < second.chapter) {
      return -1;
    }
    if (first.chapter === second.chapter) {
      if (first.startVerse < second.startVerse) {
        return -1;
      }
      return 1;
    }
    return 1;
  }
  return 1;
});

process.stdout.write(JSON.stringify(sortedArray, null, 2));
