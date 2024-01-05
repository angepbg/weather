import { Dispatch, SetStateAction } from 'react'

export interface ItemType {
  id: number
  lat: number
  lon: number
  name: string
}

export interface ComboBoxType {
  currentLocation: ItemType
  optionSelected: ItemType
  setOptionSelected: Dispatch<SetStateAction<ItemType | null>>
}
