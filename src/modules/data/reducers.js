import { handleActions } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

import { DATA } from './actions'

const initialState = {
  dataList: [],
  status: null,
  error: null,
}

export default handleActions(
  {
    [DATA]: (state, { type }) => ({
      ...state,
      dataList: null,
      status: type,
      error: null,
    }),

    [successAction(DATA)]: (state, { payload, type }) => ({
      ...state,
      dataList: payload,
      status: type,
      error: null,
    }),

    [failAction(DATA)]: (state, { payload, type }) => ({
      ...state,
      dataList: null,
      status: type,
      error: payload,
    }),
  },
  initialState,
)
