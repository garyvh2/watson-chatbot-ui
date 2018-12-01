import { produce } from 'immer'
import { combineReducers } from 'redux'
import { STORE_SESSION, STORE_MESSAGE } from './types'

const messageReducers = (state = [], { type, message, sender } = {}) => produce(state, (draft) => {
  switch (type) {
    case STORE_MESSAGE:
      return [{
        id: Date.now() * Number.EPSILON,
        message,
        sender
      }, ...draft]
  }
})

const sessionReducer = (state = '', { type, sessionId }) => produce(state, (draft) => {
  switch (type) {
    case STORE_SESSION:
      return sessionId
  }
})

export const rootReducer = combineReducers({
  messages: messageReducers,
  session: sessionReducer
})
