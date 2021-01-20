import { createAction } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

/**
 * Constants
 */

export const DATA = 'DATA'

/**
 * Actions
 */

export const dataRequest = createAction(DATA)
export const dataRequestSuccess = createAction(successAction(DATA))
export const dataRequestFail = createAction(failAction(DATA))
