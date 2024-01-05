import React from 'react'
import { render, screen } from '@testing-library/react'
import { MOCK_CITIES } from '../../../constants/cities'
import { List } from './'

const setup = (mock = {}) => {
  return <List items={[]} handleOptionSelectedClick={() => {}} optionSelectedId={1} {...mock} />
}

describe('<List/>', () => {
  test('should show the list of items', () => {
    render(setup())
    expect(screen.getByTestId('list-of-items')).toBeInTheDocument()
  })

  test('should show 3 Options', () => {
    render(
      setup({
        items: MOCK_CITIES,
      })
    )

    expect(screen.getByTestId('list-of-items')).toHaveTextContent('Tokio')
    expect(screen.getByTestId('list-of-items')).toHaveTextContent('Quito')
    expect(screen.getByTestId('list-of-items')).toHaveTextContent('Bogota')
  })
})
