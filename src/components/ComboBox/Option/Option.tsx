import React, { ReactElement } from 'react'
import { OptionInterface } from './Option.interface'
import { WrapperButton } from './styles'

export const Option = ({ item, handleOptionClick, isSelected }: OptionInterface): ReactElement => {
  const handleClick = () => {
    handleOptionClick(item)
  }

  return (
    <WrapperButton data-testid="option-item" onClick={handleClick} isSelected={!!isSelected}>
      {item.name}
    </WrapperButton>
  )
}
