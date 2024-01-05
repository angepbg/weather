import { ItemType } from '../ComboBox.interface'

export interface SelectInterface {
  listIsOpen: boolean
  handleSelectClick: () => void
  optionSelected: ItemType | null | undefined
}

export interface SVGType {
  listIsOpen: boolean
}

export interface WrapperSelectType {
  isFocused: boolean
}
