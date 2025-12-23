import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Supplies } from '../../../layout/pages/Supplies'

describe('Supplies', () => {
  it('Renders page title and description', () => {
    render(<Supplies />)

    expect(screen.getByTestId('SuppliesTitle')).toBeInTheDocument()
    expect(screen.getByTestId('SuppliesDescription')).toBeInTheDocument()
  })
})
