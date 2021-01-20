import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import dataReducer from './data/reducers'

const rootReducer = combineReducers({
  form,
  data: dataReducer,
})

export default rootReducer
