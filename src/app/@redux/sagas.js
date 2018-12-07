import { takeEvery, call, put, select } from 'redux-saga/effects'
import { SEND_MESSAGE_REQUEST } from './types'
import { sendMessage } from './api'
import { sessionSelector } from './selectors'
import { sendMessageFail, storeMessage, storeSession } from './actions'

export function * sendMessageSaga ({ message }) {
  try {
    yield put(storeMessage(message))
    const sessionId = yield select(sessionSelector)
    const request = {
      Message: message,
      SessionId: sessionId
    }
    const response = yield call(sendMessage, request)

    if (response && response.status === 500) {
      throw Error(response.error)
    }

    yield put(storeMessage(response.Response, false))
    yield put(storeSession(response.SessionId))
  } catch (error) {
    // On fail dispatch the respective action
    yield put(sendMessageFail(error))
  }
}

export function * requestMessage () {
  yield takeEvery(SEND_MESSAGE_REQUEST, sendMessageSaga)
}
