import styled from 'styled-components'
import { SVGType, WrapperSelectType } from './Select.interface'

export const WrapperSelect = styled.div<WrapperSelectType>`
  position: relative;
  z-index: 1000;
  padding: 0px 8px;
  height: 40px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1.5px solid ${({ isFocused }) => (isFocused ? '#2F588D' : '#747474')};
  &:hover {
    cursor: pointer;
  }
`

export const SVG = styled.div<SVGType>`
  height: 24px;
  svg {
    fill: ${({ listIsOpen }) => (listIsOpen ? '#2F588D' : '#747474')};
  }
  transition: transform 0.3s;
  transform: rotate(${({ listIsOpen }) => (listIsOpen ? '180deg' : '0deg')});
`

export const ItemSelected = styled.div``

export const PlaceHolder = styled.div`
  font-size: 10px;
`

export const WrapperPlaceHolderItemSelected = styled.div`
  display: inline-block;
`
