// __tests__/Day.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Day } from '../Day'

describe('Day Component', () => {
  test('renders the date correctly', () => {
    const date = '2024-01-05'
    const handleClickNewDay = jest.fn()

    render(<Day date={date} handleClickNewDay={handleClickNewDay} />)

    expect(screen.getByText('2024-01-05')).toBeInTheDocument()
  })

  test('calls handleClickNewDay when clicked', () => {
    const date = '2024-01-05'
    const handleClickNewDay = jest.fn()

    render(<Day date={date} handleClickNewDay={handleClickNewDay} />)

    fireEvent.click(screen.getByText('2024-01-05'))

    expect(handleClickNewDay).toHaveBeenCalledWith('2024-01-05')
  })
})
