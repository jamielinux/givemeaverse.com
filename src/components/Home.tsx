/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { RANDOM_VERSE_PATHNAME } from 'constants/index';
import Header from 'components/common/Header';
import Button from 'components/common/Button';

const Home = (): React.ReactElement => {
  const metaTitle = 'Give Me A Verse';
  const metaDescription =
    'Enjoy random Bible verses on a beautiful, distraction-free website. ' +
    'Use for daily inspiration or whenever you need it.';

  // Workaround for MS Edge browser bug. The SVGs display with default fill
  // color, and only after a hover event do they pick up var(--color-mid).
  // Setting the attribute again seems to make it work.
  useLayoutEffect(() => {
    const svgPaths = document.getElementsByClassName('svg-logo__circlepath');
    Array.from(svgPaths).forEach((item) => {
      item.setAttribute('fill', 'var(--color-brand)');
      item.setAttribute('fill-opacity', '0.8');
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="background--home" />
      <div id="content">
        <Header format="full" />
        <main id="main" className="home">
          <div className="home__item">
            <p className="home__text">
              <span className="home__p">Need inspiration?</span>
              <span className="home__p">
                Get a{' '}
                <Link
                  className="clickable  home__link"
                  to={RANDOM_VERSE_PATHNAME}
                >
                  random verse
                </Link>
                .
              </span>
            </p>
          </div>
          <div className="home__item">
            <p className="home__text">
              <span className="home__p">Enjoy each verse with</span>
              <span className="home__p">no distractions.</span>
            </p>
          </div>

          <Button extraClass="home__item" />
        </main>
      </div>
    </>
  );
};

export default Home;
