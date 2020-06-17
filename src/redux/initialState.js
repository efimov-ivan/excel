import {storage} from '@core/utils'
import {defaultStyles} from '@/constants'

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // {'0:1':'asd'}
  stylesState: {},
  currentText: '',
  tableTitle: 'New table',
  currentStyles: defaultStyles

}

export const initialState = storage('excel-state') ? storage('excel-state') : defaultState