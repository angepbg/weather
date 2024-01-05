import { ItemType } from '../ComboBox.interface'

export interface ListInterface {
  items: Array<ItemType>
  handleOptionSelectedClick: (itemId: ItemType) => void
  optionSelectedId: number | null | undefined
}
