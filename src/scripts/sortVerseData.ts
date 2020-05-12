/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Tool to sort the VerseData according to book, chapter and starting verse.
// This isn't used at runtime, only to sort VerseData after adding more verses.
// It's not really necessary, but means it's easy to see the spread of verses.

import VerseData from '../data/VerseData';

const bookOrder = [
  'Genesis',
  'Exodus',
  'Leviticus',
  'Numbers',
  'Deuteronomy',
  'Joshua',
  'Judges',
  'Ruth',
  '1 Samuel',
  '2 Samuel',
  '1 Kings',
  '2 Kings',
  '1 Chronicles',
  '2 Chronicles',
  'Ezra',
  'Nehemiah',
  'Esther',
  'Job',
  'Psalm',
  'Proverbs',
  'Ecclesiastes',
  'Song of Songs',
  'Isaiah',
  'Jeremiah',
  'Lamentations',
  'Ezekiel',
  'Daniel',
  'Hosea',
  'Joel',
  'Amos',
  'Obadiah',
  'Jonah',
  'Micah',
  'Nahum',
  'Habakkuk',
  'Zephaniah',
  'Haggai',
  'Zechariah',
  'Malachi',
  'Matthew',
  'Mark',
  'Luke',
  'John',
  'Acts',
  'Romans',
  '1 Corinthians',
  '2 Corinthians',
  'Galatians',
  'Ephesians',
  'Philippians',
  'Colossians',
  '1 Thessalonians',
  '2 Thessalonians',
  '1 Timothy',
  '2 Timothy',
  'Titus',
  'Philemon',
  'Hebrews',
  'James',
  '1 Peter',
  '2 Peter',
  '1 John',
  '2 John',
  '3 John',
  'Jude',
  'Revelation',
];

const sortedArray = VerseData.sort((first, second) => {
  const firstBookIndex = bookOrder.indexOf(first.book);
  const secondBookIndex = bookOrder.indexOf(second.book);

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
