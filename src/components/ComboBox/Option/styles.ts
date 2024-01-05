import styled from 'styled-components'
import { WrapperOptionType } from './Option.interface'

export const WrapperButton = styled.div<WrapperOptionType>`
  height: 40px;
  max-width: 100%;
  background-color: ${({ isSelected }) => (isSelected ? '#ebebeb' : '#fff')};
  transition: background 0.3s;
  display: flex;
  align-items: center;
  padding-left: 8px;
  cursor: pointer;
  &:hover {
    background: #ebebeb;
  }
`
