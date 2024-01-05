import { useState, useEffect } from 'react'
import { Location } from './index.interface'

const DEFAULT_LOCATION = {
  latitude: null,
  longitude: null,
  error: '',
  loading: true,
}

const useGetCurrentPosition = () => {
  const [location, setLocation] = useState<Location>(DEFAULT_LOCATION)

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
              loading: false,
            })
          },
          error => {
            setLocation({
              ...DEFAULT_LOCATION,
              error: error.message,
              loading: false,
            })
          }
        )
      } else {
        setLocation({
          ...DEFAULT_LOCATION,
          error: 'Geolocation is not supported by this browser.',
          loading: false,
        })
      }
    }

    getLocation()
  }, [])

  return location
}

export default useGetCurrentPosition
