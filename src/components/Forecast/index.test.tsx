import React from 'react'
import { render, screen } from '@testing-library/react'
import { Forecast } from '../Forecast'
import { ForecastType } from './index.interface'

describe('Forecast Component', () => {
  const sampleForecastData = {
    feelsLike: 25,
    temp: 20,
    tempMax: 30,
    tempMin: 15,
    humidity: 50,
    date: '2024-01-05 12:00:00',
  } as ForecastType

  test('renders forecast data correctly', () => {
    render(<Forecast {...sampleForecastData} />)

    expect(screen.getByText('12:00')).toBeInTheDocument()
    expect(screen.getByText('Feels Like: 25°C')).toBeInTheDocument()
    expect(screen.getByText('Temperature: 20°C')).toBeInTheDocument()
    expect(screen.getByText('Max Temperature: 30°C')).toBeInTheDocument()
    expect(screen.getByText('Min Temperature: 15°C')).toBeInTheDocument()
    expect(screen.getByText('Humidity: 50%')).toBeInTheDocument()
  })
})
