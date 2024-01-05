import React, { FC, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { ComboBox } from '../ComboBox'
import { Weather } from '../Weather'
import { DashboardType, ItemType } from './Dashboard.interface'
import useGetNameCity from '../../hooks/useGetNameCity'
import { Title, Wrapper, WrapperInfo } from './styles'

export const Dashboard: FC<DashboardType> = ({ latitude, longitude }) => {
  const { name, error } = useGetNameCity(latitude, longitude)
  const [optionSelected, setOptionSelected] = useState<ItemType | null>(null)

  const location = {
    id: 0,
    name,
    lat: latitude,
    lon: longitude,
  } as ItemType

  useEffect(() => {
    name && setOptionSelected(location)
  }, [name])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <Wrapper>
      <div>Current Location: {name}</div>
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
      <br></br>
      {optionSelected && (
        <Provider store={store}>
          <ComboBox currentLocation={location} optionSelected={optionSelected} setOptionSelected={setOptionSelected} />
          <WrapperInfo>
            <Title>Weather in {optionSelected.name} </Title>
            <Weather citySelected={optionSelected} />
          </WrapperInfo>
        </Provider>
      )}
    </Wrapper>
  )
}
