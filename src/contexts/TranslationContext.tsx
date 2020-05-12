/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { History } from 'history';
import queryString from 'query-string';
import { DEFAULT_TRANSLATION, SUPPORTED_TRANSLATIONS } from 'constants/index';
import { createCtx, readValidateStorage } from 'utils/index';

type TranslationType = 'esv' | 'kjv' | 'niv';

type ChangeTranslationHandlerType = {
  name: TranslationType;
  verseCardColor: number;
};

type TranslationContextType = {
  translation: TranslationType;
  changeTranslationHandler: Function;
};

const [useTranslationContext, ContextProvider] = createCtx<
  TranslationContextType
>();

export function TranslationContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const history: History = useHistory();
  const location = useLocation();

  const [translation, setTranslation] = useState<TranslationType>(() => {
    const requestedTranslation = queryString.parse(location.search).translation;
    if (
      typeof requestedTranslation === 'string' &&
      SUPPORTED_TRANSLATIONS.indexOf(requestedTranslation) >= 0
    ) {
      return requestedTranslation as TranslationType;
    }
    return readValidateStorage({
      name: 'defaultTranslation',
      supportedSettings: SUPPORTED_TRANSLATIONS,
      defaultValue: DEFAULT_TRANSLATION,
    }) as TranslationType;
  });

  function changeTranslationHandler({
    name,
    verseCardColor,
  }: ChangeTranslationHandlerType): void {
    setTranslation(name);
    const newLocation = {
      pathname: history.location.pathname,
      search: `translation=${name}`,
      state: {
        verseCardColor,
      },
    };
    history.replace(newLocation);
  }

  useEffect(() => {
    if (translation && SUPPORTED_TRANSLATIONS.indexOf(translation)) {
      localStorage.setItem('defaultTranslation', translation);
    }
  }, [translation]);

  const value = {
    translation,
    changeTranslationHandler,
  };

  return (
    <ContextProvider value={value as TranslationContextType}>
      {children}
    </ContextProvider>
  );
}

TranslationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useTranslationContext };
