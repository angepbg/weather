/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import configureStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import { Weather } from '../Weather'
import { Day } from '../Day'
import { Provider } from 'react-redux'
import { CityType } from './index.interface'

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureStore([sagaMiddleware])

const MOCK_CITY_SELECTED = { id: 0, lat: -34.6078265, lon: -58.4306274, name: 'Buenos Aires' } as CityType

describe('Weather Component', () => {
  const mockDispatch = jest.fn()

  beforeEach(() => {
    mockDispatch.mockClear()
  })

  test('renders weather data', async () => {
    const store = mockStore({
      weatherData: [
        {
          main: { feels_like: 25, temp: 20, temp_max: 30, temp_min: 15, humidity: 50 },
          dt_txt: '2024-01-05 12:00:00',
        },
      ],
      error: null,
      loading: false,
      dates: ['2024-01-05'],
    })

    render(
      <Provider store={store}>
        <Weather citySelected={MOCK_CITY_SELECTED} />
      </Provider>
    )

    await waitFor(() => {
      expect(screen.getByText('12:00')).toBeInTheDocument()
      expect(screen.getByText('Feels Like: 25°C')).toBeInTheDocument()
      expect(screen.getByText('Temperature: 20°C')).toBeInTheDocument()
      expect(screen.getByText('Max Temperature: 30°C')).toBeInTheDocument()
      expect(screen.getByText('Min Temperature: 15°C')).toBeInTheDocument()
      expect(screen.getByText('Humidity: 50%')).toBeInTheDocument()
    })
  })

  test('handles click on new day', async () => {
    const store = mockStore({
      weather: {
        weatherData: [
          {
            main: { feels_like: 25, temp: 20, temp_max: 30, temp_min: 15, humidity: 50 },
            dt_txt: '2024-01-05 12:00:00',
          },
        ],
        error: null,
        loading: false,
        dates: ['2024-01-05', '2024-01-06'],
      },
    })

    const handleClickNewDayMock = jest.fn()

    render(
      <Provider store={store}>
        <Day date={'2024-01-06'} handleClickNewDay={handleClickNewDayMock} />
        <Weather citySelected={MOCK_CITY_SELECTED} />
      </Provider>
    )

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      userEvent.click(screen.getByText('2024-01-06'))
      expect(handleClickNewDayMock).toHaveBeenCalledTimes(1)
    })
  })
})
