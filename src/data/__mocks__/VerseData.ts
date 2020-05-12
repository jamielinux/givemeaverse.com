/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/*
 * ESV
 *  Scripture quotations are from the ESV® Bible (The Holy Bible, English
 *  Standard Version®), copyright © 2001 by Crossway, a publishing ministry
 *  of Good News Publishers. Used by permission. All rights reserved.
 *
 * NIV
 *  Scripture quotations taken from The Holy Bible, New International Version®
 *  NIV® Copyright© 1973 1978 1984 2011 by Biblica, Inc.™ Used by permission.
 *  All rights reserved worldwide.
 *
 * KJV
 *  Scripture quotations from The Authorized (King James) Version. Rights in
 *  the Authorized Version in the United Kingdom are vested in the Crown.
 *  Reproduced by permission of the Crown’s patentee, Cambridge University
 *  Press. Rights in the Authorized outside of the United Kingdom are in the
 *  public domain.
 */

export type VerseDataType = {
  id: string;
  book: string;
  chapter: number;
  startVerse: number;
  numVerses: number;
  text: {
    esv: string;
    kjv: string;
    niv: string;
  };
};

const VerseData: VerseDataType[] = [
  {
    id: 'matthew-11:28-30',
    book: 'Matthew',
    chapter: 11,
    startVerse: 28,
    numVerses: 3,
    text: {
      esv:
        '“Come to me, all who labor and are heavy laden, and I will give' +
        ' you rest. Take my yoke upon you, and learn from me, for I am' +
        ' gentle and lowly in heart, and you will find rest for your souls.' +
        ' For my yoke is easy, and my burden is light.”',
      kjv:
        '“Come unto me, all ye that labour and are heavy laden, and I will' +
        ' give you rest. Take my yoke upon you, and learn of me; for I am' +
        ' meek and lowly in heart: and ye shall find rest unto your souls.' +
        ' For my yoke is easy, and my burden is light.”',
      niv:
        '“Come to me, all you who are weary and burdened, and I will give' +
        ' you rest. Take my yoke upon you and learn from me, for I am gentle' +
        ' and humble in heart, and you will find rest for your souls. For my' +
        ' yoke is easy and my burden is light.”',
    },
  },
  {
    id: 'ezra-8:23',
    book: 'Ezra',
    chapter: 8,
    startVerse: 23,
    numVerses: 1,
    text: {
      esv:
        'So we fasted and implored our God for this,' +
        ' and he listened to our entreaty.',
      kjv:
        'So we fasted and besought our God for this:' +
        ' and he was intreated of us.',
      niv:
        'So we fasted and petitioned our God about this,' +
        ' and he answered our prayer.',
    },
  },
];

export default VerseData;
