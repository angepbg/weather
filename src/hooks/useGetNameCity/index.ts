import { useState, useEffect } from 'react'
import axios from 'axios'
import { CityData } from './index.interface'
import { API_KEY, GET_NAME_CITY } from '../../constants/apis'

const useGetNameCity = (latitude: number, longitude: number): CityData => {
  const [cityData, setCityData] = useState<CityData>({
    name: '',
    error: null,
  })

  useEffect(() => {
    const getCityName = async () => {
      try {
        const response = await axios.get(GET_NAME_CITY, {
          params: {
            lat: latitude,
            lon: longitude,
            appid: API_KEY,
          },
        })
        const cityName = response.data[0]?.name || null

        setCityData({
          name: cityName,
          error: null,
        })
      } catch (error: any) {
        setCityData({
          name: '',
          error: `Error fetching city name: ${error.message}`,
        })
      }
    }
    getCityName()
  }, [])

  return cityData
}

export default useGetNameCity
