/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { useTranslationContext } from 'contexts/TranslationContext';

export default function VerseFooter(): React.ReactElement {
  const { translation } = useTranslationContext();

  const copyrightNotice = {
    esv:
      'Scripture quotations are from the ESV® Bible' +
      ' (The Holy Bible, English Standard Version®), copyright © 2001' +
      ' by Crossway, a publishing ministry of Good News Publishers.' +
      ' Used by permission. All rights reserved.',
    niv:
      'Scripture quotations taken from The Holy Bible,' +
      ' New International Version® NIV® Copyright© 1973 1978 1984 2011' +
      ' by Biblica, Inc.™ Used by permission. All rights reserved worldwide.',
    kjv:
      'Scripture quotations from The Authorized (King James) Version.' +
      ' Rights in the Authorized Version in the United Kingdom are vested' +
      ' in the Crown. Reproduced by permission of the Crown’s patentee,' +
      ' Cambridge University Press.' +
      ' Rights in the Authorized Version outside of the United Kingdom are' +
      ' in the public domain.',
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">{copyrightNotice[translation]}</p>
      </div>
    </footer>
  );
}
