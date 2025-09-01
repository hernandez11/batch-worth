import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Home } from '../components/Home'

describe('Home', () => {
  it('Displays Title', () => {
    render(<Home />)

    expect(screen.getByTestId('title')).toBeInTheDocument()
  })
})
