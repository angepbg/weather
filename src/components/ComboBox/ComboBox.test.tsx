import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { ComboBox } from './'

const currentLocation = {
  id: 0,
  name: 'Buenos Aires',
  lat: -34.61315,
  lon: -58.37723,
}

const setup = (mock = {}) => {
  return (
    <Provider store={store}>
      <ComboBox
        currentLocation={currentLocation}
        optionSelected={currentLocation}
        setOptionSelected={() => true}
        {...mock}
      />
    </Provider>
  )
}

describe('<ComboBox/>', () => {
  // This test is commented on because it's redundant

  // test('<ComboBox/> component should be in the document', () => {
  //   const { container } = setup()
  //   expect(container).toBeInTheDocument()
  // })

  test('Should show the select-input', () => {
    render(setup())
    expect(screen.getByTestId('select-input')).toBeTruthy()
  })

  test('Should show the list of elements when select-input is clicked', async () => {
    render(setup())
    const selectInput = screen.getByTestId('select-input')
    await fireEvent.click(selectInput)

    const listOfItems = screen.getByTestId('list-of-items')
    expect(listOfItems).toBeInTheDocument()
  })

  test('Shouldnt show the list of elements when is clicked on the document', async () => {
    render(setup())
    const selectInput = screen.getByTestId('select-input')
    await fireEvent.click(selectInput)

    const listOfElements = screen.getByTestId('list-of-items')
    expect(listOfElements).toBeInTheDocument()

    await fireEvent.click(document)
    expect(listOfElements).not.toBeInTheDocument()
  })
})
