/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import 'stylesheets/main.scss';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { CardColorContextProvider } from 'contexts/CardColorContext';
import { SlideshowContextProvider } from 'contexts/SlideshowContext';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <CardColorContextProvider>
          <SlideshowContextProvider>
            <App />
          </SlideshowContextProvider>
        </CardColorContextProvider>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
