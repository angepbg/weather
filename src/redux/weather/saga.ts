import { call, put, takeLatest } from 'redux-saga/effects'
import {
  FETCH_WEATHER_REQUEST,
  RESET_WEATHER_DATA,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  fetchWeatherRequest,
  resetWeatherDataSuccess,
} from './actions'
import { API_KEY } from '../../constants/apis'

interface WeatherData {
  list: Array<any>
}

function* fetchWeather(action: ReturnType<typeof fetchWeatherRequest>) {
  try {
    const { lat, lon } = action.payload
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&cnt=40&appid=${API_KEY}`

    const response: Response = yield call(fetch, apiUrl)
    const data: WeatherData = yield response.json()

    yield put(fetchWeatherSuccess(data.list))
  } catch (error) {
    yield put(fetchWeatherFailure(error as any))
  }
}

function* resetWeatherData() {
  try {
    yield put(resetWeatherDataSuccess())
  } catch (error) {
    console.log(error)
  }
}

function* weatherSaga() {
  yield takeLatest(RESET_WEATHER_DATA, resetWeatherData)

  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather)
}

export default weatherSaga
