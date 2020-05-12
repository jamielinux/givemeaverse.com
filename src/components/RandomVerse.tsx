/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { Redirect } from 'react-router-dom';
import VerseData from 'data/VerseData';

const RandomVerse = (): React.ReactElement => {
  const verse = VerseData[Math.floor(Math.random() * VerseData.length)];
  return <Redirect to={verse.id} />;
};

export default RandomVerse;
