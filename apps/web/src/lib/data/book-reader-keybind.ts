/**
 * @license BSD-3-Clause
 * Copyright (c) 2023, ッツ Reader Authors
 * All rights reserved.
 */

export enum BookReaderAvailableKeybind {
  AUTO_SCROLL_TOGGLE = 'autoScrollToggle',
  AUTO_SCROLL_INCREASE = 'autoScrollIncrease',
  AUTO_SCROLL_DECREASE = 'autoScrollDecrease',
  BOOKMARK = 'bookmark',
  JUMP_TO_BOOKMARK = 'jumpToBookmark',
  NEXT_CHAPTER = 'nextChapter',
  NEXT_PAGE = 'nextPage',
  PREV_CHAPTER = 'prevChapter',
  PREV_PAGE = 'prevPage',
  SET_READING_POINT = 'setCustomReadingPoint'
}

export type BookReaderKeybindMap = Record<string, BookReaderAvailableKeybind>;
