import { ItemType } from '../ComboBox.interface'

export interface OptionInterface {
  item: ItemType
  isSelected?: boolean | undefined
  handleOptionClick: (itemId: ItemType) => void
}

export interface WrapperOptionType {
  isSelected: boolean
}
