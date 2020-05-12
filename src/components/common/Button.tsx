/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { forwardRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { pushRandomVerse } from 'utils/index';
import {
  useCardColorContext,
  LocationStateType,
} from 'contexts/CardColorContext';
import Logo from './Logo';

type Props = {
  extraClass?: string;
};

export type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>((props, ref) => {
  const { extraClass } = props;

  const history = useHistory();
  const { verseId } = useParams();
  const { verseCardColor } = useCardColorContext();

  const onClickHandler = (): void => {
    // To prevent getting the same verse twice in a row, pass the verse ID
    // from the pathname forwards in ${location.state}.
    const state: LocationStateType = {};
    if (typeof verseId !== 'undefined') {
      state.avoidVerseId = verseId;
      state.avoidColor = verseCardColor;
    }
    pushRandomVerse({ history, state });
  };

  return (
    <div className={`give-me-a-verse ${extraClass}`}>
      <button
        className="clickable  give-me-a-verse__button"
        type="button"
        aria-label="Give Me A Verse"
        onClick={onClickHandler}
        ref={ref}
      >
        <Logo circle={false} />
      </button>
    </div>
  );
});

Button.defaultProps = {
  extraClass: '',
};

Button.propTypes = {
  extraClass: PropTypes.string,
};

export default Button;
