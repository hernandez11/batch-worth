import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Dashboard from '../../layout/tabs/Dashboard'

describe('Dashboard', () => {
  it('Renders title and subtitle', () => {
    render(<Dashboard />)
    expect(screen.getByTestId('DashboardTitle')).toHaveTextContent('LOLOS PASTRY')
    expect(screen.getByTestId('DashboardSubtitle')).toHaveTextContent('BATCH CALCULATOR')
  })
})
