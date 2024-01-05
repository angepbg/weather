import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Select } from './'
import { MOCK_CITIES } from '../../../constants/cities'

const setup = (mock = {}) => {
  return <Select optionSelected={null} handleSelectClick={() => {}} listIsOpen={false} {...mock} />
}

describe('<Select/>', () => {
  test('should be in the document', () => {
    render(setup())
    expect(screen.getByTestId('select-input')).toBeInTheDocument()
  })

  test('should contain text of option selected', () => {
    render(setup({ optionSelected: MOCK_CITIES[0] }))
    expect(screen.getByTestId('select-input')).toHaveTextContent('Tokio')
  })

  test('should call handleSelectClick when select-input is clicked', async () => {
    const handleSelectClickMock = jest.fn()
    render(setup({ handleSelectClick: handleSelectClickMock }))
    const selectInput = screen.getByTestId('select-input')
    await fireEvent.click(selectInput)

    expect(handleSelectClickMock).toHaveBeenCalled()
  })

  test('should show arrow svg', () => {
    render(setup())
    expect(screen.getByTestId('ExpandMore')).toBeVisible()
  })

  test('svg-expand-more should has style transform rotate(0deg)', () => {
    render(setup())
    expect(screen.getByTestId('svg-expand-more')).toHaveStyle(`transform: rotate(0deg)`)
  })
})
