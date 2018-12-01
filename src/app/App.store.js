import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './@redux/reducers'
import { requestMessage } from './@redux/sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(requestMessage)

window.store = store
