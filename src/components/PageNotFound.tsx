/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from 'components/common/Header';

const PageNotFound = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found</title>
        <meta name="description" content="Page not found." />
      </Helmet>

      <Header format="static" />

      <main id="main" className="page-not-found">
        <section className="page-not-found__content">
          <h1 className="page-not-found__title">404 — Page Not Found</h1>
          <p className="page-not-found__text">
            Sorry, this page doesn’t exist! Go back to the{' '}
            <Link to="/" className="clickable  page-not-found__link">
              home page
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
};

export default PageNotFound;
