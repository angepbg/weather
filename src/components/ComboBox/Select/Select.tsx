import React, { ReactElement } from 'react'
import { WrapperSelect, SVG, PlaceHolder, ItemSelected, WrapperPlaceHolderItemSelected } from './styles'
import { SelectInterface } from './Select.interface'
import { ExpandMore } from '../../../icons/ExpandMore'

export const Select = ({ listIsOpen, optionSelected, handleSelectClick = () => {} }: SelectInterface): ReactElement => {
  return (
    <WrapperSelect data-testid="select-input" isFocused={listIsOpen} onClick={handleSelectClick}>
      {optionSelected ? (
        <WrapperPlaceHolderItemSelected>
          <PlaceHolder>Select a City</PlaceHolder>
          <ItemSelected>{optionSelected.name}</ItemSelected>
        </WrapperPlaceHolderItemSelected>
      ) : (
        'Select an Item'
      )}
      <SVG data-testid="svg-expand-more" listIsOpen={listIsOpen}>
        <ExpandMore />
      </SVG>
    </WrapperSelect>
  )
}
