import React, { FC } from 'react'
import { Wrapper } from './styles'
import { DayType } from './index.interface'

export const Day: FC<DayType> = ({ date, handleClickNewDay }) => {
  const handleClick = () => {
    handleClickNewDay(date)
  }
  return <Wrapper onClick={handleClick}>{date}</Wrapper>
}
