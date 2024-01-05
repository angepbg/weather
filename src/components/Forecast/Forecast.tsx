import React, { FC } from 'react'
import { format } from 'date-fns'

import { Wrapper, Title } from './styles'
import { ForecastType } from './index.interface'

export const Forecast: FC<ForecastType> = ({ feelsLike, temp, tempMax, tempMin, humidity, date }) => {
  return (
    <Wrapper>
      <Title>{format(date, 'HH:mm')}</Title>
      <p>Feels Like: {feelsLike}°C</p>
      <p>Temperature: {temp}°C</p>
      <p>Max Temperature: {tempMax}°C</p>
      <p>Min Temperature: {tempMin}°C</p>
      <p>Humidity: {humidity}%</p>
    </Wrapper>
  )
}
