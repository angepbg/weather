import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import weatherReducer from './weather/reducer'
import weatherSaga from './weather/saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(weatherReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(weatherSaga)

export default store
