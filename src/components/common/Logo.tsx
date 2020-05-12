/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import PropTypes from 'prop-types';
import SvgData from 'data/SvgData';

// We use three variations of the logo in the header.
//   1. "full": Color circle and animate on page load.
//   2. "static": Color circle and no animation.
//   3. "minimal": Monochrome circle and animate on hover.
// Additionally, the there's a version without the circle for use in the
// "Give Me A Verse" button.

type Props = {
  circle: boolean;
};

const Logo = (props: Props): React.ReactElement => {
  const { circle } = props;

  // For the header.
  const logoWithCircle = (
    <svg
      className="svg-logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.173 7.938"
      height="30"
      aria-hidden="true"
    >
      {SvgData.logoWithCircle}
    </svg>
  );

  // For the "Give Me A Verse" button.
  const logoWithoutCircle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg-logo"
      width="80%"
      viewBox="0 0 41.316 5.292"
      aria-hidden="true"
    >
      {SvgData.logoWithoutCircle}
    </svg>
  );

  if (circle) {
    return logoWithCircle;
  }
  return logoWithoutCircle;
};

Logo.defaultProps = {
  circle: true,
};

Logo.propTypes = {
  circle: PropTypes.bool,
};

export default Logo;
