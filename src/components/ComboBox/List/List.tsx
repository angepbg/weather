import React, { ReactElement } from 'react'
import { ListInterface } from './List.interface'
import { WrapperList } from './styles'
import { Option } from '../Option'

export const List = ({ items, handleOptionSelectedClick, optionSelectedId }: ListInterface): ReactElement => {
  return (
    <WrapperList data-testid="list-of-items">
      {items.map(item => (
        <Option
          key={`option-${item.id}`}
          item={item}
          handleOptionClick={handleOptionSelectedClick}
          isSelected={optionSelectedId === item.id}
        />
      ))}
    </WrapperList>
  )
}
