/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { createContext, useContext } from 'react';
import { History } from 'history';
import VerseData from 'data/VerseData';

export function createCtx<ContextType>(): readonly [
  () => ContextType,
  React.Provider<ContextType | undefined>,
] {
  const context = createContext<ContextType | undefined>(undefined);
  function useCtx(): ContextType {
    return useContext(context) as ContextType;
  }
  return [useCtx, context.Provider] as const;
}

export function unhideModal({
  content,
  modal,
}: {
  content: HTMLElement;
  modal: HTMLElement;
}): void {
  content.setAttribute('aria-hidden', 'true');
  const clickable = document.getElementsByClassName('clickable');
  Array.from(clickable).forEach((element) => {
    if (modal && modal.contains(element)) {
      element.setAttribute('tabindex', '0');
      element.removeAttribute('aria-hidden');
    } else {
      element.setAttribute('tabindex', '-1');
      element.setAttribute('aria-hidden', 'true');
    }
  });
}

export function hideModals({ content }: { content: HTMLElement }): void {
  content.removeAttribute('aria-hidden');
  const nav = document.getElementById('nav');
  const settings = document.getElementById('settings');
  const slideshow = document.getElementById('slideshow');
  const info = document.getElementById('info');
  const clickable = document.getElementsByClassName('clickable');
  Array.from(clickable).forEach((element) => {
    if (
      (settings && settings.contains(element)) ||
      (slideshow && slideshow.contains(element)) ||
      (info && info.contains(element)) ||
      (nav && nav.contains(element))
    ) {
      element.setAttribute('tabindex', '-1');
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.setAttribute('tabindex', '0');
      element.removeAttribute('aria-hidden');
    }
  });
}

export function pushRandomVerse({
  history,
  state,
}: {
  history: History;
  state: { avoidVerseId?: string };
}): void {
  // To avoid getting the same verse twice in a row, we pass the previous
  // verseId in ${location.state.avoidVerseId}. If undefined, pick any verse.
  if (
    typeof state === 'undefined' ||
    typeof state.avoidVerseId === 'undefined'
  ) {
    const { id } = VerseData[Math.floor(Math.random() * VerseData.length)];
    history.push({
      pathname: `/${id}`,
      state,
    });
    return;
  }
  const filteredVerses = VerseData.filter(
    (verse) => verse.id !== state.avoidVerseId,
  );
  const { id } = filteredVerses[
    Math.floor(Math.random() * filteredVerses.length)
  ];
  history.push({
    pathname: `/${id}`,
    state,
  });
}

// Only use values from Local Storage if they are valid.
export function readValidateStorage({
  name,
  supportedSettings,
  defaultValue,
}: {
  name: string;
  supportedSettings: string[];
  defaultValue: string;
}): string | null {
  const storedSetting: string | null = localStorage.getItem(name);
  if (
    storedSetting &&
    supportedSettings &&
    supportedSettings.indexOf(storedSetting) >= 0
  ) {
    return storedSetting;
  }
  return defaultValue;
}
