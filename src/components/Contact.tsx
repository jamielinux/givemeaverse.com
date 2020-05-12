/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/common/Header';

const Contact = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Give Me A Verse — Contact</title>
        <meta name="description" content="Get in touch." />
      </Helmet>

      <div className="background--contact" />

      <Header format="static" />

      <main id="main" className="contact">
        <section className="contact__content">
          <h1 className="contact__title">Contact</h1>
          <p className="contact__text">
            Hi! I’m Jamie, the author of this website. I’m a Christian, church
            leader, medical doctor, senior manager, Linux DevOps engineer, web
            developer, software developer and musician.
          </p>

          <p className="contact__text">
            Whether you’ve found a problem with the website, have a suggestion,
            or just want to say thank you, I’d love to hear from you.
          </p>

          <p className="contact__text">
            Feel free to drop me an{' '}
            <a
              className="clickable  contact__link"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:j@jamielinux.com"
              aria-label="Click here to send Jamie an email."
            >
              email
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
};

export default Contact;
