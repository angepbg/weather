import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import useGetNameCity from '../../hooks/useGetNameCity'
import { Dashboard } from './'

jest.mock('../../hooks/useGetNameCity')

describe('<Dashboard/>', () => {
  test('renders dashboard with correct information', async () => {
    ;(useGetNameCity as jest.Mock).mockReturnValue({ name: 'TestCity', error: null })

    render(<Dashboard latitude={0} longitude={0} />)

    expect(screen.getByText('Latitude: 0')).toBeInTheDocument()
    expect(screen.getByText('Longitude: 0')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Current Location: TestCity')).toBeInTheDocument()
    })
  })

  test('handles error', async () => {
    ;(useGetNameCity as jest.Mock).mockReturnValue({ name: '', error: 'TestError' })

    render(<Dashboard latitude={0} longitude={0} />)

    await waitFor(() => {
      expect(screen.getByText('Error: TestError')).toBeInTheDocument()
    })
  })
})
