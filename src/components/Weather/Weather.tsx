import React, { useEffect, useState } from 'react'
import { WeatherType } from './index.interface'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeatherRequest } from '../../redux/weather/actions'
import { WeatherState } from '../../redux/weather/reducer'
import { Forecast } from '../Forecast'
import { Day } from '../Day/'
import { WrapperDays } from './styles'

export const Weather: React.FC<WeatherType> = ({ citySelected }) => {
  const dispatch = useDispatch()
  const [currentDay, setCurrentDay] = useState<string | null>(null)
  const { error, loading, weatherData, dates } = useSelector((state: WeatherState) => {
    return { weatherData: state.weatherData, error: state.error, loading: state.loading, dates: state.dates }
  })

  useEffect(() => {
    if (!weatherData) {
      dispatch<any>(fetchWeatherRequest(citySelected.lat, citySelected.lon))
    }
  }, [dispatch, citySelected, weatherData])

  useEffect(() => {
    dates?.length > 0 && setCurrentDay(dates[0])
  }, [dates])

  const handleClickNewDay = (date: string): void => {
    date !== currentDay && setCurrentDay(date)
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (loading) {
    return <div>Loading weather forest</div>
  }

  return (
    <div>
      <WrapperDays>
        {currentDay && dates.map((day: string) => <Day date={day} handleClickNewDay={handleClickNewDay} />)}
      </WrapperDays>
      {weatherData && (
        <>
          {weatherData.map(({ main, dt_txt }: any) => {
            return (
              <>
                {dt_txt.includes(currentDay) && (
                  <Forecast
                    feelsLike={main.feels_like}
                    temp={main.temp}
                    tempMax={main.temp_max}
                    tempMin={main.temp_min}
                    humidity={main.humidity}
                    date={dt_txt}
                  />
                )}
              </>
            )
          })}
        </>
      )}
    </div>
  )
}
