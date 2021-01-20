import { all } from 'redux-saga/effects'

import dataSagas from './data/sagas'

export default function* rootSaga() {
  yield all([dataSagas()])
}
