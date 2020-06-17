import {TABLE_RESIZE, CHANGE_TEXT, CHANGE_TABLE_TITLE, CHANGE_STYLES, APPLY_STYLE, UPDATE_DATE} from './types'

// action creater
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  }
}

export function changeTableTitle(data) {
  return {
    type: CHANGE_TABLE_TITLE,
    data
  }
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLES,
    data
  }
}

export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data
  }
}

export function updateDate() {
  return {
    type: UPDATE_DATE
  }
}
