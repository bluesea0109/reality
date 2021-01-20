import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { notification } from 'antd'

import { DATA, dataRequestSuccess, dataRequestFail } from './actions'
import { getErrorMessage } from 'utils/auth-helpers'

export function* dataRequestHandler() {
  const params = {
    url: '/resource/gh4g-9sfh.json',
    method: 'get',
  }
  try {
    const res = yield call(axios.request, params)
    yield put(dataRequestSuccess(res.data))
  } catch (err) {
    const res = dataRequestFail(getErrorMessage(err.response))
    yield put(res)
    notification.open({
      message: 'Error Found',
      description: res.payload,
    })
  }
}

export default function* dataSaga() {
  yield takeLatest(DATA, dataRequestHandler)
}
