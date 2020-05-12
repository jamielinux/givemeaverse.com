/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { RANDOM_VERSE_PATHNAME } from 'constants/index';
import Header from 'components/common/Header';

const About = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Give Me A Verse — About</title>
        <meta
          name="description"
          content="Information about the Give Me A Verse website."
        />
      </Helmet>

      <Header format="static" />

      <main id="main" className="about">
        <section className="about__content">
          <h1 className="about__title">About</h1>
          <p className="about__text">
            Get a{' '}
            <Link
              to={RANDOM_VERSE_PATHNAME}
              className="clickable  about__link"
              aria-label="Click here to get a random verse."
            >
              random verse
            </Link>{' '}
            of scripture from the Bible on-demand. The minimal design, gentle
            colors and thoughtful typography help me get into the right frame of
            mind to focus on the incredible word of God. Maybe it might help you
            too!
          </p>

          <h2 className="about__heading">Can I download this as an App?</h2>
          <p className="about__text">
            Absolutely. On iOS, tap the Share arrow and “Add to Home Screen”. On
            Android, open the Menu and click “Add to Homescreen”.
          </p>

          <h2 className="about__heading">Who made this website?</h2>
          <p className="about__text">
            Hi. I’m Jamie. Feel free to{' '}
            <Link
              to="/contact"
              className="clickable  about__link"
              aria-label="Click here to go to the Contact page."
            >
              get in touch
            </Link>
            .
          </p>

          <h2 className="about__heading">
            I’m a techie! How did you build this website?
          </h2>
          <p className="about__text">
            The technical details are in this{' '}
            <a
              className="clickable  about__link"
              href="https://github.com/jamielinux/givemeaverse.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Click here to view the source code GitHub repository."
            >
              GitHub repository
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
