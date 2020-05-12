/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { useParams } from 'react-router-dom';

import PageNotFound from 'components/PageNotFound';
import VerseData from 'data/VerseData';
import VerseMain from './VerseMain';

export default function Verse(): React.ReactElement {
  const { verseId } = useParams();
  const thisVerse = VerseData.find((verse) => verse.id === verseId);

  if (!thisVerse) {
    return <PageNotFound />;
  }
  return <VerseMain thisVerse={thisVerse} />;
}
