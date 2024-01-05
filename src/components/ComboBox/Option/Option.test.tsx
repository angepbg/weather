import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { MOCK_CITIES } from '../../../constants/cities'
import { ItemType } from '../ComboBox.interface'
import { Option } from './'

const setup = (mock = {}) => {
  return <Option item={MOCK_CITIES[0]} handleOptionClick={(itemId: ItemType) => itemId} {...mock} />
}

describe('<Option/>', () => {
  test('should show Option component', () => {
    render(setup())
    expect(screen.getByTestId('option-item')).toBeInTheDocument()
  })

  test('should show name of item', () => {
    render(
      setup({
        item: MOCK_CITIES[1],
      })
    )
    expect(screen.getByTestId('option-item')).toHaveTextContent('Rio de Janeiro')
  })

  test('should call handleOptionClick when de option is clicked', async () => {
    const handleOptionClickMock = jest.fn()

    render(
      setup({
        handleOptionClick: handleOptionClickMock,
      })
    )
    const optionItem = screen.getByTestId('option-item')

    await fireEvent.click(optionItem)

    expect(handleOptionClickMock).toHaveBeenCalledTimes(1)
  })
})
