import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_FAIL, STORE_SESSION, STORE_MESSAGE } from './types'

export const sendMessageRequest = (message) => ({ type: SEND_MESSAGE_REQUEST, message })
export const sendMessageFail = () => ({ type: SEND_MESSAGE_FAIL, error: true })
export const storeMessage = (message, sender = true) => ({ type: STORE_MESSAGE, message, sender })
export const storeSession = (sessionId) => ({ type: STORE_SESSION, sessionId })
