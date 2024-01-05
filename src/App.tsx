import React, { ReactElement } from 'react'
import useGetCurrentPosition from './hooks/useGetCurrentPosition'

import { Dashboard } from './components/Dashboard'
import { Location } from './hooks/useGetCurrentPosition/index.interface'

export const App = (): ReactElement => {
  const { latitude, longitude, error, loading } = useGetCurrentPosition() as Location

  if (error) {
    return <p>Error: {error}</p>
  }

  if (loading) {
    return <p>Loading Current Location</p>
  }

  return <div>{latitude && longitude && <Dashboard latitude={latitude} longitude={longitude} />}</div>
}
