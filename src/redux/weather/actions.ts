import { Action } from 'redux'

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST'
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'

export const RESET_WEATHER_DATA = 'RESET_WEATHER_DATA'
export const RESET_WEATHER_DATA_SUCCESS = 'RESET_WEATHER_DATA_SUCCESS'

export interface FetchWeatherRequestAction {
  type: typeof FETCH_WEATHER_REQUEST
  payload: {
    lat: number
    lon: number
  }
}

interface FetchWeatherSuccessAction {
  type: typeof FETCH_WEATHER_SUCCESS
  payload: {
    weatherData: any
  }
}

interface FetchWeatherFailureAction {
  type: typeof FETCH_WEATHER_FAILURE
  payload: {
    error: string
  }
}

interface ResetWeatherDataAction extends Action<typeof RESET_WEATHER_DATA> {}

interface ResetWeatherDataSuccessAction extends Action<typeof RESET_WEATHER_DATA_SUCCESS> {}

export type WeatherActionTypes =
  | FetchWeatherRequestAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction
  | ResetWeatherDataAction
  | ResetWeatherDataSuccessAction

export const fetchWeatherRequest = (lat: number, lon: number): FetchWeatherRequestAction => ({
  type: FETCH_WEATHER_REQUEST,
  payload: { lat, lon },
})

export const fetchWeatherSuccess = (weatherData: any): FetchWeatherSuccessAction => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { weatherData },
})

export const fetchWeatherFailure = (error: string): FetchWeatherFailureAction => ({
  type: FETCH_WEATHER_FAILURE,
  payload: { error },
})

export const resetWeatherDataRequest = (): ResetWeatherDataAction => ({
  type: RESET_WEATHER_DATA,
})

export const resetWeatherDataSuccess = (): ResetWeatherDataSuccessAction => ({
  type: RESET_WEATHER_DATA_SUCCESS,
})
