import { WeatherActionTypes } from './actions'
import { format } from 'date-fns'
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  RESET_WEATHER_DATA,
  RESET_WEATHER_DATA_SUCCESS,
} from './actions'

export interface WeatherState {
  weatherData: any
  dates: Array<string>
  loading: boolean
  error: string | null
}

const initialState: WeatherState = {
  dates: [],
  error: null,
  loading: false,
  weatherData: null,
}

const weatherReducer = (state = initialState, action: WeatherActionTypes): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return { ...state, loading: true, error: null }

    case FETCH_WEATHER_SUCCESS:
      const dateObjects = action.payload.weatherData.map((data: any) => new Date(data.dt_txt))
      const uniqueDateStrings = Array.from(
        new Set(dateObjects.map((date: any) => format(date, 'yyyy-MM-dd')))
      ) as Array<string>

      return {
        ...state,
        loading: false,
        weatherData: action.payload.weatherData,
        dates: uniqueDateStrings,
      }

    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload.error }

    case RESET_WEATHER_DATA:
      return { ...state, loading: true, error: null }

    case RESET_WEATHER_DATA_SUCCESS:
      return { loading: false, error: null, weatherData: null, dates: [] }

    default:
      return state
  }
}

export default weatherReducer
