export interface CityType {
  id: number
  lat: number
  lon: number
  name: string
}

export interface WeatherType {
  citySelected: CityType
}
